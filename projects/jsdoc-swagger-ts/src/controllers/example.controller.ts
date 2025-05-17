import express from 'express';
class ExampleController {
  routePath = '/example';
  registerRoutes = (route: express.Router) => {
    route.post(`${this.routePath}/`, this.postExample);
  };

  postExample = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      res.json({
        success: true,
        data: [],
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  // FIXME: can place somewhere inside the file
  /**
   * @swagger
   * /example:
   *    post:
   *      summary: example route in controller class
   *      responses:
   *          200:
   *            description: response example
   */
  putExample = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      res.json({
        success: true,
        data: [],
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}

export default ExampleController;
