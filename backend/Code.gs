function doPost(e) {

  return ContentService
    .createTextOutput(
      JSON.stringify({

        success: true,

        message: "API Working"

      })

    )
    .setMimeType(ContentService.MimeType.JSON);

}