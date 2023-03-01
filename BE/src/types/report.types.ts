import { Request, Response } from 'express';

type ReportExpressControler = {
  list: (req: Request, res: Response) => void;
};

export { ReportExpressControler };
