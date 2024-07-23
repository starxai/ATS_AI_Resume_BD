import type { Schema, Attribute } from '@strapi/strapi';

export interface AchivementsAchivements extends Schema.Component {
  collectionName: 'components_achivements_achivements';
  info: {
    displayName: 'achivements';
    icon: 'check';
    description: '';
  };
  attributes: {
    achivements: Attribute.RichText;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    description: Attribute.Text;
    percentage: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    workSummery: Attribute.RichText;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'stack';
  };
  attributes: {
    projectname: Attribute.String;
    link: Attribute.String;
    Discription: Attribute.RichText;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'monitor';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achivements.achivements': AchivementsAchivements;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'projects.projects': ProjectsProjects;
      'skills.skills': SkillsSkills;
    }
  }
}
