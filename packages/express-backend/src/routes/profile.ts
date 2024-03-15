import express, { Request, Response } from "express";
import { Profile } from "ts-models";
import profiles from "../profiles";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  console.log("Getting profile", userid)
  profiles
    .get(userid)
    .then((profile: Profile | undefined) => {
      if (!profile) throw "Not found";
      else res.json(profile);
    })
    .catch((err) => res.status(404).end());
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const updatedFields = req.body;

  profiles
    .get(userid)
    .then((profile: Profile | undefined) => {
      if (!profile) throw "Not found";
      
      Object.assign(profile, updatedFields);
      
      return profiles.update(userid, profile);
    })
    .then((updatedProfile: Profile) => res.json(updatedProfile))
    .catch((err) => res.status(404).end());
});

export default router;