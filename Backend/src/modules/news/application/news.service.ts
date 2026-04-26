import { PrismaNewsRepository } from "../infrastructure/repositories/prisma-news.repository.js";
import { CreateNewsDto, UpdateNewsDto, News } from "../domain/news.js";

export class NewsService {
  constructor(private newsRepository: PrismaNewsRepository) {}

  async getAllNews(): Promise<News[]> {
    return this.newsRepository.findAll();
  }

  async getNewsById(id: string): Promise<News | null> {
    return this.newsRepository.findById(id);
  }

  async createNews(data: CreateNewsDto): Promise<News> {
    return this.newsRepository.create(data);
  }

  async updateNews(id: string, data: UpdateNewsDto): Promise<News> {
    return this.newsRepository.update(id, data);
  }

  async deleteNews(id: string): Promise<News> {
    return this.newsRepository.delete(id);
  }
}
