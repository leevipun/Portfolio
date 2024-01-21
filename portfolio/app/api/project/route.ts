import Project from '@/app/models/project.js';
import connect from '@/app/utils/connection.ts';
import {NextResponse} from 'next/server';

export const POST = async (req: any) => {
  const {title, description, instagram, github, website, stack} =
    await req.json();

  console.log(title, description, instagram, github, website, stack);

  await connect();
  console.log('Creating new project with name:', title);

  const newProject = new Project({
    title: title,
    description: description,
    instagram: instagram,
    github: github,
    website: website,
    stack: stack,
  });
  console.log(newProject.title);
  try {
    await newProject.save();
    console.log('Project saved');
    return new NextResponse('Project created', {status: 201});
  } catch (err) {
    return new NextResponse('Project creation failed', {status: 500});
  }
};

export const GET = async () => {
  await connect();
  try {
    const projects = await Project.find({});
    console.log('Projects fetched');
    return new NextResponse(JSON.stringify(projects), {status: 200});
  } catch (err) {
    return new NextResponse('Project fetching failed', {status: 500});
  }
};
