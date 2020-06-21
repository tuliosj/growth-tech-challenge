import React, { useState } from "react";
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
import {
  ArrowForward as ForwardIcon,
  ExpandMore,
  ExpandLess,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { IListItem } from "./types";
import useStyles from "./styles";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  items: IListItem[];
}

const Browser: React.FC<Props> = ({ Icon, items }) => {
  const classes = useStyles(useTheme());
  const [toggle, setToggle] = useState(-1);

  const handleToggle = (id: number) => {
    if (toggle === id) {
      setToggle(-1);
    } else {
      setToggle(id);
    }
  };

  return (
    <List className={classes.list}>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar className={classes.secondaryBackground}>
              <Icon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.primary}
            secondary={
              item.link !== "" || toggle === item.id ? item.secondary : ""
            }
          />
          <ListItemSecondaryAction>
            {item.link !== "" ? (
              <Link to={item.link}>
                <IconButton edge="end" aria-label="access">
                  <ForwardIcon className={classes.secondaryColor} />
                </IconButton>
              </Link>
            ) : (
              <IconButton
                edge="end"
                aria-label="access"
                onClick={() => handleToggle(item.id)}
              >
                {toggle === item.id ? (
                  <ExpandLess className={classes.secondaryColor} />
                ) : (
                  <ExpandMore className={classes.secondaryColor} />
                )}
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default Browser;
