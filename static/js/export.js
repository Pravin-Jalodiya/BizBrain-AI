jQuery(document).ready(function () {
    $("#btn-print").click(function () {
      event.preventDefault();
      // Get the content, logo, and heading from the target div
      const contentToPrint = $("#results-container").html();
      // const logo = $("#image-2").prop("outerHTML");
      const heading = $("#main-heading").prop("outerHTML");

      // Open a new window or iframe 
      const printWindow = window.open("", "_blank");

      // Write the content, logo, and heading to the new window or iframe
      printWindow.document.write(
        "<html><head><title>Business Analysis</title><style> body {font-family: Arial, sans-serif; color: #333; background-color: #fff;} #print-content {border: 1px solid #ccc; padding: 20px;} </style></head><body>"
      );
      
      // printWindow.document.write(logo);
      printWindow.document.write(heading);
      printWindow.document.write(
        '<div id="print-content">' + contentToPrint + "</div>"
      );
      printWindow.document.write("</body></html>");
      // Call the print function on the new window or iframe
      printWindow.document.close();
      printWindow.print();
    });
  });
