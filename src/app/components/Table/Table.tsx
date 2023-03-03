import { transparentize } from "polished";
import { TableInstance } from "react-table";
import NoData from "../NoData/NoData";
import * as T from "./Table.styles";

export default function Table<T extends Object>({
  instance,
}: {
  instance: TableInstance<T>;
}) {
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = instance;

  return (
    <>
      <T.Wrapper cellSpacing={0} cellPadding={0} {...getTableProps()}>
        <T.Heading>
          {headerGroups.map((headerGroup) => (
            <T.HeadingRow  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <T.HeadingCell {...column.getHeaderProps}>
                  {column.render("Header")}
                </T.HeadingCell>
              ))}
            </T.HeadingRow>
          ))}
        </T.Heading>
        <T.Body {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <T.Row {...row.getRowProps()}>
                {row.cells.map((cel) => {
                  return (
                    <T.BodyCell {...cel.getCellProps()}>
                      {cel.render("Cell")}
                    </T.BodyCell>
                  );
                })}
              </T.Row>
            );
          })}
        </T.Body>
      </T.Wrapper>

      {!rows.length && (
        <div style={{backgroundColor: transparentize(0.95, '#274060')}}>
          <NoData height={360}/>
        </div>
      )}
    </>
  );
}
