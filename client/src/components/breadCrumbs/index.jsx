import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function AddBreadcrumbs({ items }) {
  return (
    <Breadcrumbs separator="›">
      {items.map((item, index) =>
        item.path ? (
          <Link
            key={index}
            component={RouterLink}
            to={item.path}
            underline="none"
            color="inherit"
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
}

export default AddBreadcrumbs;
