import { Status, Code } from '../lib/enums.ts';
import { Router } from 'express';


type PingPayload = {
  status: Status;
  code: Code;
}


const pingRouter: Router = Router();

const ping_payload: PingPayload = {
  status: Status.ONLINE,
  code: Code.OK
}

pingRouter.get('/', (req, res) => {
  res.json(ping_payload);
});

export default pingRouter;
