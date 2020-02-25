<template>
  <div class="container" id="magContainer">
    <h1 class="headerT">The NARAP News Magazine</h1>
    <br />
    <br />

 <div class="container" id="textContainer">
    <v-row>
      <h5
        class="center"
      >Welcome to the first edition of NARAP News. Please share with your friends too!</h5>
    </v-row>
    <br />
    <v-row>
      <h5
        class="center"
      >NOTE: Please use the arrows in the gray bar (just to the left of the page numbers) to navigate through the magazine spreads.</h5>
    </v-row>
    <br />
    <br />
    </div>

    <iframe
      id="mag"
      src="https://wixlabs-pdf-dev.appspot.com/assets/pdfjs/web/viewer.html?file=%2Fpdfproxy%3Finstance%3DnMbe5AxEocjTD1tul_HSlOGdYilP2VsGhEEWkznpb_s.eyJpbnN0YW5jZUlkIjoiNmY2ZjYwYWMtNDZlMy00N2I0LWI3OTctMjFlMWIxNjc2MWI3IiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiMWYwYzM4NjItMDk0OS00Yjg4LTkxMDItMDRlZTg2M2I5MDEwIiwic2lnbkRhdGUiOiIyMDIwLTAyLTExVDIzOjAwOjMzLjA4MloiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImFiMzY1ZmQwLTA3NTYtNDdjYS1iNDFlLWJjMzcyZTkyZDhkZCIsImJpVG9rZW4iOiI3MDYzNThjZS00ZmFhLTBjM2MtMjY5NS0yNTBmMzc1Y2YxYTciLCJzaXRlT3duZXJJZCI6ImUzZDVmNzQ3LTI3ZTctNDI2Ny1iZGRkLTM2MTdmOTg2ZTkzZSJ9%26compId%3Dcomp-iwaw95l0%26url%3Dhttps%3A%2F%2Fmedia.wix.com%2Fugd%2F4c8ad7_0b81497a57584988a289bf91d04db2c8.pdf&rng=1581462048491#page=1&zoom=auto,-55,792&links=true&allowPrinting=true&allowDownload=true&originalFileName=NARAP_News_Fall_2016INT-wix"
    ></iframe>
  </div>
</template>

<style scoped>
#magContainer{
  width: 100%;
}
.headerT {
  text-align: center;
  font-size: 40px;
  margin-top: 2%;
  font-family: "Trebuchet MS", sans-serif;
  color: rgb(0, 48, 0);
}
.center {
  font-size: 15px;
  text-align: center;
  margin-left: 25%;
  display: flex;
}
#mag {
  width: 75%;
  height: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
#textContainer{
display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  text-align: center;
}
</style>

<script>
</script>
