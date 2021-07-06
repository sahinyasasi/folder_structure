import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableBody,
} from "@material-ui/core";
/*const headers = [
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Age",
    value: "age",
  },
];
const items = [
  {
    name: "sahinya",
    age: 23,
  },
  
];
<CustomTable headers={headers} items={items}  />*/

const CustomTable = (props) => {
  const { headers, items } = props;
  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((header, i) => (
                      <TableCell key={i}>{header.text.toUpperCase()}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, i) => (
                    <TableRow key={i}>
                      {headers.map(({ value }) => (
                        <TableCell key={value}>{item[value]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default CustomTable;
