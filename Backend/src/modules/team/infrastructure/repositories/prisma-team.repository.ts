import { PrismaClient } from "../../../../generated/prisma/client.js";
import { TeamMember, CreateTeamMemberDto, UpdateTeamMemberDto } from "../../domain/team.js";

export class PrismaTeamRepository {
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

  async findAll(includeInactive: boolean = false): Promise<TeamMember[]> {
    return this.prisma.teamMember.findMany({
      where: includeInactive ? {} : { isActive: true },
      orderBy: { createdAt: "asc" },
    }) as unknown as TeamMember[];
  }

  async findById(id: string): Promise<TeamMember | null> {
    return this.prisma.teamMember.findUnique({
      where: { id },
    }) as unknown as TeamMember | null;
  }

  async create(data: CreateTeamMemberDto): Promise<TeamMember> {
    const cleaned = this.cleanData(data);
    return this.prisma.teamMember.create({
      data: cleaned,
    }) as unknown as TeamMember;
  }

  async update(id: string, data: UpdateTeamMemberDto): Promise<TeamMember> {
    const cleaned = this.cleanData(data);
    return this.prisma.teamMember.update({
      where: { id },
      data: cleaned,
    }) as unknown as TeamMember;
  }

  async delete(id: string): Promise<TeamMember> {
    return this.prisma.teamMember.delete({
      where: { id },
    }) as unknown as TeamMember;
  }
}
