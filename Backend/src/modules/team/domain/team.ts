export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string | null | undefined;
  socials?: any | null | undefined;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTeamMemberDto = {
  name: string;
  role: string;
  description: string;
  image?: string | null | undefined;
  socials?: any | null | undefined;
  isActive?: boolean | undefined;
};

export type UpdateTeamMemberDto = {
  name?: string | undefined;
  role?: string | undefined;
  description?: string | undefined;
  image?: string | null | undefined;
  socials?: any | null | undefined;
  isActive?: boolean | undefined;
};
