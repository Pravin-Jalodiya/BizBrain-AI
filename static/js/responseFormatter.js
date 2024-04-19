function isEmptyStr(str) {
    if (str === undefined) {
        return true;
    } else if (str == null) {
        return true;
    } else if (str == "") {
        return true;
    } else {
        return false;
    }
}
function responseFormatter(data) {
    const resultsContainer = document.getElementById("results-container");
    while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
} 
    const numberOfResponses = Object.keys(data).filter((key) =>
                key.startsWith("response_")
            ).length;

            for (let i = 0; i < numberOfResponses; i++) {
                if(i==0){
                const responseKey = "response_" + i;
                const responseData = data[responseKey];
                const headerText = "Brainstorming and analysis of renowned innovators and successful business leaders";
                const header = document.createElement("h2");
                header.textContent = headerText;
                resultsContainer.appendChild(header);

                const h4Element = document.createElement("h4");
                h4Element.textContent = "Insights:";
                resultsContainer.appendChild(h4Element);
    
                const insights = responseData.split("\n\n").filter(insight => insight.trim() !== '');

                if(insights) {
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("btn-print").disabled = false;
                }

                insights.forEach((insight, index) => {
                    const [name, ...contentLines] = insight.split("\n");
                    const formattedContent = contentLines.map((line, lineIndex) => {
                        const removedDoubleQutoes = line.replace(/^"|"$/g, "");
                        const removedIndexing = removedDoubleQutoes.replace(/^\d+\.\s*/, '');
                        const cleanLine = removedIndexing.trim(); // remove whitespace
                        if(!isEmptyStr(cleanLine)) return `Reformulation ${lineIndex + 1}: ${cleanLine}<br>`;
                    }).join("");
            
                    const formattedInsight = `<p><strong>${index + 1}. ${name}:</strong><br>${formattedContent}</p>`;
                    
                    resultsContainer.innerHTML += formattedInsight;
                });  
            }
            else {
                const responseKey = 'response_' + i;
        const responseData = data[responseKey];

        const headerText = "To better understand the Jobs to be Done (JTBD) for our project, here are 3 alternative JTBD to focus on moving forward";
        const header = document.createElement("h2");
        header.textContent = headerText;
        resultsContainer.appendChild(header);

        const rows = responseData.split("\n\n").filter(row => row.trim() !== '');

        if(rows) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("btn-print").disabled = false;
        }

        const table = document.createElement("table");
    
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const headers = ["User", "Situation", "Motivation"];
        headers.forEach(headerText => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement("tbody");
        for (let j = 0; j < rows.length; j++) {
            const rowData = rows[j].split("\n");
            const row = document.createElement("tr");
            rowData.forEach(cellData => {
                const removedDoubleQutoes = cellData.replace(/^"|"$/g, "");
                const removedIndexing = removedDoubleQutoes.replace(/^\d+\.\s*/, '');
                const cleanData = removedIndexing.trim(); // remove whitespace
                if(cleanData!=="") {
                const cell = document.createElement("td");
                cell.textContent = cleanData;
                row.appendChild(cell);
                }
            });
            tbody.appendChild(row);
        }
        table.appendChild(tbody)
        
        resultsContainer.appendChild(table);
            }
        }
    }