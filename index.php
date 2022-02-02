<?php
    require 'header.php';
?>


<div class="scan-wrap">

    <!--
    <div class="scan-type-wrap">
        <h2>Scan Type:</h2>
        <button class="scan-type-button selected-scan">Keyword Group</button>
        <button class="scan-type-button">Keyword Placement</button>
        <button class="scan-type-button">Keyword First</button>
        <button class="scan-type-button">Keyword Last</button>
    </div>
    -->

    <h2 class="mt-4">Primary Keyword:</h2>
    <input placeholder="primary keyword" type="text" class="primary-keyword-input mt-1" />

    <div class="keywords-wrap">
        <h2>Keywords:</h2>
        <textarea placeholder="Add keywords on seperate lines" rows="10"></textarea>
    </div>

    <!--
    <div class="scan-secondary-wrap">
        <h2>Keyword Groups:</h2>
        <input placeholder="2" type="number" class="groups-input" />
    </div>
    -->

    <div class="mt-2">
        <h2>Extension:</h2>
        <select class="domain-extension">
            <option>.com</option>
            <option>.net</option>
            <option>.org</option>
            <!--
            <option>.co</option>
            <option>.io</option>
            -->
        </select>
    </div>

    <button class="submit-search">Find Domains</button>

</div>

<div class="result-set-wrap">
    <h2></h2>
    <div class="status mt-3">
        <img src="gif/spinner.gif" />
        <span>Searching domains...</span>
    </div>
    <p class="results-count"><span></span></p>
    <div class="result-set">

    </div>
</div>

<script src="main.js"></script>