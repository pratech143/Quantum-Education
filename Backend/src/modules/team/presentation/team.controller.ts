import { Request, Response } from 'express';
import { TeamService } from '../application/team.service.js';
import { createTeamMemberSchema, updateTeamMemberSchema, teamMemberIdParamSchema } from './team.schemas.js';

export class TeamController {
  constructor(private teamService: TeamService) {}

  getAll = async (req: Request, res: Response) => {
    const includeInactive = req.query.all === 'true';
    const team = await this.teamService.getAllTeamMembers(includeInactive);
    res.json({
      success: true,
      data: team,
      requestId: req.requestId
    });
  };

  getById = async (req: Request, res: Response) => {
    const { id } = teamMemberIdParamSchema.parse(req.params);
    const member = await this.teamService.getTeamMemberById(id);
    
    if (!member) {
      return res.status(404).json({
        success: false,
        code: 'NOT_FOUND',
        message: 'Team member not found.',
        requestId: req.requestId
      });
    }

    res.json({
      success: true,
      data: member,
      requestId: req.requestId
    });
  };

  create = async (req: Request, res: Response) => {
    const payload = createTeamMemberSchema.parse(req.body);
    const member = await this.teamService.createTeamMember(payload);
    
    res.status(201).json({
      success: true,
      message: 'Team member created successfully.',
      data: member,
      requestId: req.requestId
    });
  };

  update = async (req: Request, res: Response) => {
    const { id } = teamMemberIdParamSchema.parse(req.params);
    const payload = updateTeamMemberSchema.parse(req.body);
    const member = await this.teamService.updateTeamMember(id, payload);
    
    res.json({
      success: true,
      message: 'Team member updated successfully.',
      data: member,
      requestId: req.requestId
    });
  };

  delete = async (req: Request, res: Response) => {
    const { id } = teamMemberIdParamSchema.parse(req.params);
    await this.teamService.deleteTeamMember(id);
    
    res.json({
      success: true,
      message: 'Team member deleted successfully.',
      requestId: req.requestId
    });
  };
}
