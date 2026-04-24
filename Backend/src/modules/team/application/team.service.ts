import { PrismaTeamRepository } from "../infrastructure/repositories/prisma-team.repository.js";
import { CreateTeamMemberDto, UpdateTeamMemberDto, TeamMember } from "../domain/team.js";

export class TeamService {
  constructor(private teamRepository: PrismaTeamRepository) {}

  async getAllTeamMembers(includeInactive: boolean = false): Promise<TeamMember[]> {
    return this.teamRepository.findAll(includeInactive);
  }

  async getTeamMemberById(id: string): Promise<TeamMember | null> {
    return this.teamRepository.findById(id);
  }

  async createTeamMember(data: CreateTeamMemberDto): Promise<TeamMember> {
    return this.teamRepository.create(data);
  }

  async updateTeamMember(id: string, data: UpdateTeamMemberDto): Promise<TeamMember> {
    return this.teamRepository.update(id, data);
  }

  async deleteTeamMember(id: string): Promise<TeamMember> {
    return this.teamRepository.delete(id);
  }
}
