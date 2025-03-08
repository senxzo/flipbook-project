$(document).ready(function () {
  let totalNumberOfPages = 0;
  let currentPage = 0;
  let textPages = [];

  // Hide flipbook and textBook by default
  $("#flipbook").hide();
  $("#textBook").hide();

  // Handle PDF upload
  $("#uploadForm").on("submit", function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", $("#pdfFile")[0].files[0]);

    const startTime = Date.now();
    $("#message").html("Loading...");

    $.ajax({
      url: "/upload-pdf",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        const loadTime = Date.now() - startTime;
        if (loadTime > 2) {
          setTimeout(() => {
            $("#message").html("");
          }, 2);
        } else {
          $("#message").html("");
        }

        if (!$("#toggleDisplay").is(":checked")) {
          $("#textBook").hide();
        }
        $("#flipbook").show();
        startFlipbook(response.filePath);
      },
      error: function (err) {
        $("#message").html("Error uploading PDF.");
        console.error(err);
      },
    });
  });

  // Handle text display
  $("#displayText").on("click", function () {
    const text = $("#textInput").val();
    if (text.trim()) {
      if (!$("#toggleDisplay").is(":checked")) {
        $("#flipbook").hide();
      }
      $("#textBook").show();
      displayTextInBook(text);
      $("#paginationControls").show();
    }
  });

  // Start flipbook after PDF is uploaded
  function startFlipbook(filePath) {
    const source = new EventSource(
      `/pdf-to-img?filePath=${encodeURIComponent(filePath)}`
    );
    source.addEventListener("generatedpages", function (event) {
      $("#pageCounter").html(`<strong>Page ${event.data}</strong>`);
    });
    source.addEventListener("totalpages", function (event) {
      totalNumberOfPages = parseInt(event.data);
      source.close();
      generatePages();
    });
  }

  // Generate flipbook pages
  function generatePages() {
    for (let i = 1; i <= totalNumberOfPages; i++) {
      $("#flipbook").append(
        `<div class="page" style="background-image:url(http://localhost:3000/images/page${i}.png);"></div>`
      );
    }
    $("#flipbook").turn({
      display: "double",
      acceleration: true,
    });
  }

  // Display text in book layout
  function displayTextInBook(text) {
    const book = $("#textBook");
    book.empty();

    const words = text.split(" ");
    const wordsPerPage = 300; // Adjust based on your layout
    textPages = [];

    for (let i = 0; i < words.length; i += wordsPerPage) {
      const pageText = words.slice(i, i + wordsPerPage).join(" ");
      const page = $(`<div class="page"><p>${pageText}</p></div>`);
      book.append(page);
      textPages.push(page);
    }

    // Show the first page
    currentPage = 0;
    showPage(currentPage);
  }

  // Pagination controls
  $("#prevPage").on("click", function () {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  $("#nextPage").on("click", function () {
    if (currentPage < textPages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Show a specific page
  function showPage(pageIndex) {
    $("#textBook .page").removeClass("active");
    textPages[pageIndex].addClass("active");
    $("#pageCounter").html(`<strong>Page ${pageIndex + 1}</strong>`);

    // Show/hide pagination buttons
    $("#prevPage").toggle(pageIndex > 0);
    $("#nextPage").toggle(pageIndex < textPages.length - 1);
  }

  // Keyboard navigation for flipbook
  $(window).bind("keydown", function (e) {
    if (e.keyCode == 37) {
      $("#flipbook").turn("previous");
    } else if (e.keyCode == 39) {
      $("#flipbook").turn("next");
    }
  });
});
