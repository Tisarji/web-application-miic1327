package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func WellcomPage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<html><body>")
	fmt.Fprintf(w, "<form action=\"/recvdata\" method=\"post\">")
	fmt.Fprintf(w, "Rows: <input type=\"text\" name=\"rows\"><br>")
	fmt.Fprintf(w, "Columns: <input type=\"text\" name=\"columns\"><br>")
	fmt.Fprintf(w, "<input type=\"submit\" value=\"Submit\">")
	fmt.Fprintf(w, "</form>")
	fmt.Fprintf(w, "</body></html>")
}

func RecvData(w http.ResponseWriter, r *http.Request) {
	rows := r.FormValue("rows")
	columns := r.FormValue("columns")

	rowCount, err1 := strconv.Atoi(rows)
	colCount, err2 := strconv.Atoi(columns)

	if err1 != nil || err2 != nil {
		fmt.Fprintf(w, "error invaild col, row")
		return
	}

	fmt.Fprintf(w, "<html><body>")
	fmt.Fprintf(w, "<table border=\"1\">")

	for i := 0; i < rowCount; i++ {
		fmt.Fprintf(w, "<tr>")
		for j := 0; j < colCount; j++ {
			fmt.Fprintf(w, "<td>Row %d, Col %d</td>", i+1, j+1)
		}
		fmt.Fprintf(w, "</tr>")
	}

	fmt.Fprintf(w, "</table>")
	fmt.Fprintf(w, "</body></html>")
}

func main() {
	http.HandleFunc("/", WellcomPage)
	http.HandleFunc("/recvdata", RecvData)
	http.ListenAndServe(":8080", nil)
}
