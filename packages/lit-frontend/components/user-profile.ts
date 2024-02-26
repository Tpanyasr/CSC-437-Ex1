import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "express-backend/src/models/profile";
import { serverPath } from "./rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    render() {
       

        return html`
        <h1>User Profile</h1>
        
        `;
    }

    static styles = [

        css`
        
    `];

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.profile = json as Profile;
        });
    }

    connectedCallback() {
        if (this.path) {
        this._fetchData(this.path);
        }
        super.connectedCallback();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (name === "path" && oldValue !== newValue && oldValue) {
            this._fetchData(newValue);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
    render() {

        console.log("Rendering form", this.profile);

        return html``
        
    }

    static styles = [...UserProfileElement.styles, 
        css`
        `];

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
            k === "instruments"
                ? [k, (v as string).split(",").map((s) => s.trim())]
                : [k, v]
            );
        const json = Object.fromEntries(entries);

        this._putData(json);
    }

    _putData(json: Profile) {
    fetch(serverPath(this.path), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json)
    })
        .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
        })
        .then((json: unknown) => {
        if (json) this.profile = json as Profile;
        })
        .catch((err) =>
        console.log("Failed to PUT form data", err)
        );
    }
}