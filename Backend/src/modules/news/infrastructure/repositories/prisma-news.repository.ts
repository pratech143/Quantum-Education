import { PrismaClient } from "../../../../generated/prisma/client.js";
import { News, CreateNewsDto, UpdateNewsDto } from "../../domain/news.js";

export class PrismaNewsRepository {
  constructor(private prisma: PrismaClient) {}

  private cleanData(data: any) {
    const cleaned: any = {};
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined) {
        cleaned[key] = data[key];
      }
    });
    return cleaned;
  }

  async findAll(): Promise<News[]> {
    return this.prisma.news.findMany({
      orderBy: { date: "desc" },
    }) as unknown as News[];
  }

  async findById(id: string): Promise<News | null> {
    return this.prisma.news.findUnique({
      where: { id },
    }) as unknown as News | null;
  }

  async create(data: CreateNewsDto): Promise<News> {
    const cleaned = this.cleanData(data);
    return this.prisma.news.create({
      data: cleaned,
    }) as unknown as News;
  }

  async update(id: string, data: UpdateNewsDto): Promise<News> {
    const cleaned = this.cleanData(data);
    return this.prisma.news.update({
      where: { id },
      data: cleaned,
    }) as unknown as News;
  }

  async delete(id: string): Promise<News> {
    return this.prisma.news.delete({
      where: { id },
    }) as unknown as News;
  }
}
