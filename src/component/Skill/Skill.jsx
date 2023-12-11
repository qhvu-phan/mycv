import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Skill.css";
const Skill = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const techList = [
    {
      img: "tech-js.png",
      name: "JavaScipt",
    },
    {
      img: "tech-typescript.png",
      name: "TypeScript",
    },
    {
      img: "tech-Java.png",
      name: "Java",
    },
    {
      img: "tech-react.png",
      name: "ReactJS",
    },
    {
      img: "tech-angular.png",
      name: "Angular",
    },
    {
      img: "tech-html.png",
      name: "HTML5",
    },
    {
      img: "tech-bootrap.png",
      name: "Bootrap",
    },
    {
      img: "tech-material.png",
      name: "Material UI",
    },

    {
      img: "tech-css3.png",
      name: "CSS3",
    },
    {
      img: "tech-mysql.png",
      name: "MySQL",
    },
    {
      img: "tech-mongo.png",
      name: "MongoDB",
    },
  ];
  const toolList = [
    {
      img: "tech-github.png",
      name: "Github",
    },
    {
      img: "tech-gitlab.png",
      name: "GitLab",
    },
    {
      img: "tech-docker.png",
      name: "Docker",
    },
    {
      img: "tech-circleci.png",
      name: "Circle CI",
    },
  ];
  return (
    <React.Fragment>
      <div className="container-skill">
        <div className="container-skill-title">
          <h1>My Skill</h1>
        </div>
        <Grid
          className="container-list-skill"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid container xs={6} gap={2} className="list-skill list-skill-left">
            <div className="title-tecnical-skill">Technical</div>
            <Grid container spacing={2} noWrap columns={10}>
              {techList.map((techItem, index) => (
                <Grid item xs={2} key={index}>
                  <Item>
                    <div>
                      <img src={techItem.img} alt="" />
                    </div>
                    <div>
                      <p>{techItem.name}</p>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            xs={6}
            gap={2}
            className="list-skill list-skill-right"
          >
            <span className="title-tecnical-skill">Tools</span>
            <Grid container spacing={2} columns={10}>
              {toolList.map((toolItem, index) => (
                <Grid item xs={2} key={index}>
                  <Item>
                    <div>
                      <img src={toolItem.img} alt="" />
                    </div>
                    <div>
                      <p>{toolItem.name}</p>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Skill;
