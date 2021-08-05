import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Skeleton from "@material-ui/lab/Skeleton";

const NoteList = ({ isLoading, handleNote, newNote, createNote, notesData }) => (
  <React.Fragment>
    <h2>New note</h2>
    <form onSubmit={createNote}>
      <Box display="flex">
        <Box flexGrow={1}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="note"
            label="Create new note"
            value={newNote}
            onChange={handleNote}
          />
        </Box>
        <Box alignSelf="center" m={2}>
          <Button
            size="large"
            variant="contained"
            margin="normal"
            color="primary"
            type="submit"
            label="submit"
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
    {isLoading ? (
      <div>
        <h2>
          <Skeleton variant="rect" width={100} height={30} />
        </h2>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton variant="rect" width={100} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="rect" width={100} height={20} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="rect" height={20} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ) : (
      <div>
        <h2>My notes:</h2>
        {notesData ? (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Text</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(notesData).map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {notesData[row].date.date.split(":")[0] +
                      ":" +
                      notesData[row].date.date.split(":")[1]}
                  </TableCell>
                  <TableCell>{notesData[row].content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div>
            <h2>...no notes yet :(</h2>
          </div>
        )}
      </div>
    )}
  </React.Fragment>
);

export default NoteList;
