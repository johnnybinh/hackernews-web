import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

interface NewsProps {
  title: string;
  score: number;
}

const NewsCard = (props: NewsProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Score: {props.score}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
