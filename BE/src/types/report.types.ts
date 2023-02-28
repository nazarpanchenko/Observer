import { Request, Response } from 'express';

type ReportControler = {
  list: (req: Request, res: Response) => void;
};

export { ReportControler };
