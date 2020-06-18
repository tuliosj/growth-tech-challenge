import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  SvgIconTypeMap,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { ArrowForward as ForwardIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  items: [
    {
      id: number;
      primary: string;
      secondary: string;
      link: string;
    }
  ];
}

const Browser: React.FC<Props> = ({ Icon, items }) => {
  const classes = useStyles(useTheme());
  return (
    <div className={classes.demo}>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>
                <Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.primary} secondary={item.secondary} />
            <ListItemSecondaryAction>
              <Link to={item.link}>
                <IconButton edge="end" aria-label="delete">
                  <ForwardIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Browser;
