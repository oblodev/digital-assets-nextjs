import styles from "../styles/CryptoTable.module.css";

import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import styled from "@emotion/styled";
import NumberFormat, { NumericFormat } from "react-number-format";

function CryptoTable({ cryptos }) {
  const TableRow = styled.tr`
    background-color: white;
    text-align: center;
    &:nth-of-type(odd) {
      background-color: #f1f1f1;
    }
  `;

  const TableCell = styled.td`
    padding: 10px;
    text-align: left;
  `;

  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
  `;
  return (
    <div className={styles.container}>
      <Table>
        <TableBody>
          <TableRow className={styles.tableHeadRow}>
            <TableCell className={styles.th}>#</TableCell>
            <TableCell className={styles.th}>Kryptowährung</TableCell>
            <TableCell className={styles.th}>Kurs</TableCell>
            <TableCell className={styles.th}>Kurs 1h</TableCell>
            <TableCell className={styles.th}>Kurs 24h</TableCell>
            <TableCell className={styles.th}>Kurs 7d</TableCell>
            <TableCell className={styles.th}>Volumen 24h</TableCell>
            <TableCell className={styles.th}>MarketCap</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          {cryptos &&
            cryptos.map((crypto) => (
              <TableRow key={crypto.id}>
                <TableCell className={styles.td}>
                  {crypto.market_cap_rank}
                </TableCell>
                <TableCell className={styles.cryptoName}>
                  <img
                    src={crypto.image}
                    alt="crypto-logo"
                    className={styles.cryptoLogo}
                  />
                  {crypto.name}{" "}
                </TableCell>
                <TableCell className={styles.td}>
                  {crypto.current_price > 1
                    ? crypto.current_price.toFixed(2)
                    : crypto.current_price.toFixed(4)}
                  $
                </TableCell>
                <TableCell
                  className={
                    crypto.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                >
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    crypto.price_change_percentage_24h > 0
                      ? "green ds"
                      : "red ds"
                  }
                >
                  {crypto.price_change_percentage_24h.toFixed(2)} %
                </TableCell>
                <TableCell
                  className={
                    crypto.price_change_percentage_7d_in_currency > 0
                      ? "green ds maxK"
                      : "red ds maxK"
                  }
                >
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}%
                </TableCell>
                <TableCell className={styles.ds}>
                  {
                    <NumericFormat
                      thousandsGroupStyle="thousand"
                      value={crypto.total_volume}
                      decimalSeparator="."
                      displayType="text"
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  }
                  $
                </TableCell>
                <TableCell className={styles.td}>
                  {
                    <NumericFormat
                      thousandsGroupStyle="thousand"
                      value={crypto.market_cap}
                      decimalSeparator="."
                      displayType="text"
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  }
                  $
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CryptoTable;
