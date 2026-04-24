import { Request, Response } from "express";
import { NewsService } from "../application/news.service.js";
import { createNewsSchema, updateNewsSchema, newsIdParamSchema } from "./news.schemas.js";

export class NewsController {
  constructor(private newsService: NewsService) {}

  getAll = async (req: Request, res: Response) => {
    const news = await this.newsService.getAllNews();
    res.status(200).json({
      success: true,
      data: news,
      requestId: req.requestId
    });
  };

  getById = async (req: Request, res: Response) => {
    const { id } = newsIdParamSchema.parse(req.params);
    const news = await this.newsService.getNewsById(id);
    
    if (!news) {
      return res.status(404).json({ 
        success: false,
        code: 'NEWS_NOT_FOUND',
        message: "News not found",
        requestId: req.requestId
      });
    }

    res.status(200).json({
      success: true,
      data: news,
      requestId: req.requestId
    });
  };

  create = async (req: Request, res: Response) => {
    try {
      const payload = createNewsSchema.parse(req.body);
      const news = await this.newsService.createNews(payload);
      
      res.status(201).json({
        success: true,
        message: 'News created successfully.',
        data: news,
        requestId: req.requestId
      });
    } catch (error) {
      console.error('DEBUG: News Creation Error:', error);
      throw error;
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = newsIdParamSchema.parse(req.params);
      const payload = updateNewsSchema.parse(req.body);
      const news = await this.newsService.updateNews(id, payload);
      
      res.status(200).json({
        success: true,
        message: 'News updated successfully.',
        data: news,
        requestId: req.requestId
      });
    } catch (error) {
      console.error('DEBUG: News Update Error:', error);
      throw error;
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = newsIdParamSchema.parse(req.params);
      await this.newsService.deleteNews(id);
      
      res.status(200).json({
        success: true,
        message: 'News deleted successfully.',
        requestId: req.requestId
      });
    } catch (error) {
      console.error('DEBUG: News Delete Error:', error);
      throw error;
    }
  };
}
