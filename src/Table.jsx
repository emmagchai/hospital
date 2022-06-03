import React from 'react';
 function Table()
 {
        return(
            <>
            <table className="table table-striped table-bordered table-hover">
      <tr className="thead-dark">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
      <tr className="table-success">
        <td>Johny</td>
        <td>Doey</td>
        <td>johny@example.com</td>
      </tr>
      <tr className="table-primary">
        <td>Marygroo</td>
        <td>Moe</td>
        <td>marygroo@example.com</td>
      </tr>
      <tr className="table-danger">
        <td>Annu</td>
        <td>Jaiswal</td>
        <td>annu@codeyoung.com</td>
      </tr>
      <tr className="table-secondary">
        <td>humza</td>
        <td>meheme</td>
        <td>humza@example.com</td>
      </tr>
      <tr className="table-text-warning">
        <td>meme</td>
        <td>meheme</td>
        <td>meme@example.com</td>
      </tr>
  </table>
            </>
        );
 }

 export default Table;