
const HTML = `
<html><head></head><body class="ui-overlay-a">

    <!--
			Study revision: 95313		-->
    <title>2017B0152: There and Back Again: Materializing Mythic Worlds through Fan Pilgrimages</title>

    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

    <style type="text/css">
        /* Chase: Added a custom style here to wrap filenames that went off the document */
        a.filename {
            line-break: anywhere;
        }

        fieldset:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
        }

        fieldset:last-child {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
        }

        form fieldset label.ui-input-text,
        form fieldset label.ui-select,
        form fieldset div.ui-controlgroup-label,
        form fieldset legend,
        .ui-label-text {
            margin: .2em 0;
            padding: 0;
            line-height: 1.4em;
            font-size: 16px;
        }

        form fieldset .ui-input-search,
        form fieldset .ui-input-text {
            width: 100%;
            margin: 0;
            padding: .4em;
        }

        form fieldset .ui-input-text {
            margin-bottom: .2em;
        }

        form fieldset .ui-input-search input.ui-input-text {
            margin-left: 24px !important;
            width: 92% !important;
            padding: 0 !important;
        }

        form fieldset.ui-input-readonly .ui-input-search input.ui-input-text {
            margin-left: 0px !important;
        }

        form fieldset.ui-input-readonly .ui-icon-searchfield:after {
            background: none;
        }

        form fieldset .ui-select {
            width: 100%;
            margin: 0 0 .2em;
        }

        .ui-btn-inline {
            width: auto !important;
        }

        .ui-content .ui-search-results {
            width: 94%;
            margin: 0 3% .2em;
            padding: 0;
        }

        form fieldset .ui-checkbox,
        form fieldset .ui-radio,
        form fieldset div.ui-btn {
            width: 100%;
            margin: 0 0 .2em;
        }

        form fieldset .ui-select div.ui-btn {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
        }

        form fieldset.ui-controlgroup-vertical div.ui-checkbox,
        form fieldset.ui-controlgroup-vertical div.ui-radio {
            padding-left: 0;
        }

        form fieldset.ui-controlgroup-vertical div.ui-btn {
            margin-left: 0;
            width: 100%;
        }

        form fieldset.ui-controlgroup-vertical div.ui-btn:last-of-type,
        form fieldset.ui-controlgroup-vertical div.ui-checkbox:last-of-type,
        form fieldset.ui-controlgroup-vertical div.ui-radio:last-of-type {
            margin-bottom: 0.2em;
        }

        form fieldset.ui-controlgroup-horizontal .ui-controlgroup-controls {
            display: block;
        }

        form fieldset.ui-controlgroup-horizontal div.ui-checkbox:first-child,
        form fieldset.ui-controlgroup-horizontal div.ui-radio:first-child {
            margin-left: 0% !important;
        }

        form fieldset.ui-controlgroup-horizontal div.ui-checkbox,
        form fieldset.ui-controlgroup-horizontal div.ui-radio {
            width: auto !important;
            margin-left: 0 !important;
        }

        .ui-checkbox .ui-btn-inner,
        .ui-radio .ui-btn-inner {
            line-height: 1.2em;
        }

        .ui-required label.ui-input-text:after,
        .ui-required label.ui-select:after,
        .ui-required .ui-controlgroup-label:after,
        .ui-required-example:after {
            color: #990000;
            content: "*";
            font-weight: normal;
            font-size: 80%;
            vertical-align: super;
        }

        .ui-highlight,
        .ui-highlight label {
            background: #ffffd0;
            color: #00467b;
        }

        .ui-mini.ui-input-text,
        div.ui-input-search.ui-mini {
            margin-bottom: .2em !important;
            margin-bottom: 0 !important;
        }

        .full-format .ui-mini.ui-input-text,
        .full-format div.ui-input-search.ui-mini {
            margin-left: 0 !important;
        }

        form fieldset .text-output {
            line-height: 1.4em;
            font-size: 16px;
        }

        form fieldset div.text-output div.ui-radio,
        form fieldset div.text-output div.ui-checkbox {
            margin-left: 0;
            width: 100%;
        }

        form div.ui-radio .ui-icon.ui-icon-example,
        form div.ui-checkbox .ui-icon.ui-icon-example {
            border: 1px solid #cccccc;
        }

        form fieldset.ui-controlgroup-horizontal div.text-output {
            width: auto;
        }

        form fieldset.ui-controlgroup-horizontal div.text-output div.ui-radio,
        form fieldset.ui-controlgroup-horizontal div.text-output div.ui-checkbox {
            float: none;
            display: inline-block;
            padding-left: .7em;
            padding-right: .7em;
        }

        .ui-content .ui-listview.ui-text-output:first-child {
            margin-bottom: -16px;
            margin-top: -16px;
        }

        form fieldset.default-format .ui-input-text,
        form fieldset.default-format .ui-input-search {
            width: 75%;
        }

        form fieldset.default-format div.ui-btn,
        form fieldset.default-format.ui-controlgroup-vertical div.ui-btn {
            width: 75%;
        }

        form fieldset.default-format .ui-checkbox,
        form fieldset.default-format .ui-radio,
        form fieldset.default-format .ui-select {
            width: 75%;
        }

        form fieldset.default-format .ui-select .ui-btn,
        form fieldset.default-format .ui-checkbox .ui-btn,
        form fieldset.default-format .ui-radio .ui-btn {
            width: 100%;
        }

        form fieldset.left-format label.ui-input-text,
        form fieldset.left-format label.ui-select,
        form fieldset.left-format div.ui-controlgroup-label,
        form fieldset.left-format legend,
        form fieldset.left-full-format label.ui-input-text,
        form fieldset.left-full-format label.ui-select,
        form fieldset.left-full-format div.ui-controlgroup-label,
        form fieldset.left-full-format legend {
            float: left;
            width: 23%;
            padding-right: 2%;
        }

        form fieldset.left-format input.ui-input-text,
        form fieldset.left-format div.ui-input-search,
        form fieldset.left-format textarea.ui-input-text,
        form fieldset.left-format div.ui-input-datebox,
        form fieldset.left-full-format input.ui-input-text,
        form fieldset.left-full-format div.ui-input-search,
        form fieldset.left-full-format textarea.ui-input-text,
        form fieldset.left-full-format div.ui-input-datebox {
            margin-left: 25%;
            width: 75%;
        }

        form fieldset.left-format div.ui-input-datebox input.ui-input-text,
        form fieldset.left-full-format div.ui-input-datebox input.ui-input-text {
            margin-left: 0 !important;
            width: 100% !important;
        }

        form fieldset.left-format div.ui-checkbox,
        form fieldset.left-format div.ui-radio,
        form fieldset.left-format div.ui-select,
        form fieldset.left-format div.ui-btn,
        form fieldset.left-full-format div.ui-checkbox,
        form fieldset.left-full-format div.ui-radio,
        form fieldset.left-full-format div.ui-select,
        form fieldset.left-full-format div.ui-btn {
            margin-left: 25%;
            width: 75%;
        }

        form fieldset.left-format div.ui-select div.ui-btn,
        form fieldset.left-full-format div.ui-select div.ui-btn {
            margin-left: 0;
        }

        form fieldset.left-format .ui-checkbox,
        form fieldset.left-format .ui-radio,
        form fieldset.left-full-format .ui-checkbox,
        form fieldset.left-full-format .ui-radio {
            clear: right;
            /* Set to opposite side of the legend is float direction */
        }

        form fieldset.left-format div.ui-select .ui-btn,
        form fieldset.left-format div.ui-checkbox .ui-btn,
        form fieldset.left-format div.ui-radio .ui-btn,
        form fieldset.left-full-format div.ui-select .ui-btn,
        form fieldset.left-full-format div.ui-checkbox .ui-btn,
        form fieldset.left-full-format div.ui-radio .ui-btn {
            width: 100%;
        }

        form fieldset.left-split-format label.ui-input-text,
        form fieldset.left-split-format label.ui-select,
        form fieldset.left-split-format div.ui-controlgroup-label,
        form fieldset.left-split-format legend {
            float: left;
            width: 48%;
            padding-right: 2%;
        }

        form fieldset.left-split-format input.ui-input-text,
        form fieldset.left-split-format div.ui-input-search,
        form fieldset.left-split-format textarea.ui-input-text,
        form fieldset.left-split-format div.ui-input-datebox {
            margin-left: 50%;
            width: 50%;
        }

        form fieldset.left-split-format div.ui-input-datebox input.ui-input-text {
            margin-left: 0 !important;
            width: 100% !important;
        }

        form fieldset.left-split-format div.ui-checkbox,
        form fieldset.left-split-format div.ui-radio,
        form fieldset.left-split-format div.ui-select,
        form fieldset.left-split-format div.ui-btn {
            margin-left: 50%;
            width: 50%;
        }

        form fieldset.left-split-format div.ui-select div.ui-btn {
            margin-left: 0;
        }

        form fieldset.left-split-format .ui-checkbox,
        form fieldset.left-split-format .ui-radio {
            clear: right;
            /* Set to opposite side of the legend is float direction */
        }

        form fieldset.left-split-format div.ui-select .ui-btn,
        form fieldset.left-split-format div.ui-checkbox .ui-btn,
        form fieldset.left-split-format div.ui-radio .ui-btn {
            width: 100%;
        }

        form fieldset.right-format label.ui-input-text,
        form fieldset.right-format label.ui-input-search,
        form fieldset.right-format label.ui-select,
        form fieldset.right-format div.ui-controlgroup-label,
        form fieldset.right-format legend,
        form fieldset.right-full-format label.ui-input-text,
        form fieldset.right-full-format label.ui-input-search,
        form fieldset.right-full-format label.ui-select,
        form fieldset.right-full-format div.ui-controlgroup-label,
        form fieldset.right-full-format legend {
            float: right;
            width: 23%;
        }

        form fieldset.right-format input.ui-input-text,
        form fieldset.right-format div.ui-input-search,
        form fieldset.right-format textarea.ui-input-text,
        form fieldset.right-full-format input.ui-input-text,
        form fieldset.right-full-format div.ui-input-search,
        form fieldset.right-full-format textarea.ui-input-text {
            float: left;
            margin-left: 0;
            width: 75%;
        }

        form fieldset.right-format div.ui-checkbox,
        form fieldset.right-format div.ui-radio,
        form fieldset.right-format div.ui-select,
        form fieldset.right-format div.ui-btn,
        form fieldset.right-full-format div.ui-checkbox,
        form fieldset.right-full-format div.ui-radio,
        form fieldset.right-full-format div.ui-select,
        form fieldset.right-full-format div.ui-btn {
            margin-left: 0;
            width: 75%;
        }

        form fieldset.right-format div.ui-select div.ui-btn,
        form fieldset.right-full-format div.ui-select div.ui-btn {
            margin-left: 0;
        }

        form fieldset.right-format .ui-checkbox,
        form fieldset.right-format .ui-radio,
        form fieldset.right-full-format .ui-checkbox,
        form fieldset.right-full-format .ui-radio {
            clear: left;
        }

        form fieldset.right-format.ui-controlgroup-horizontal div.ui-checkbox,
        form fieldset.right-format.ui-controlgroup-horizontal div.ui-radio,
        form fieldset.right-full-format.ui-controlgroup-horizontal div.ui-checkbox,
        form fieldset.right-full-format.ui-controlgroup-horizontal div.ui-radio {
            float: right;
        }

        form fieldset.right-format.ui-controlgroup-horizontal div.ui-checkbox:first-child,
        form fieldset.right-format.ui-controlgroup-horizontal div.ui-radio:first-child,
        form fieldset.right-full-format.ui-controlgroup-horizontal div.ui-checkbox:first-child,
        form fieldset.right-full-format.ui-controlgroup-horizontal div.ui-radio:first-child {
            margin-right: 2%;
        }

        form fieldset.right-format div.ui-select .ui-btn,
        form fieldset.right-format div.ui-checkbox .ui-btn,
        form fieldset.right-format div.ui-radio .ui-btn,
        form fieldset.right-full-format div.ui-select .ui-btn,
        form fieldset.right-full-format div.ui-checkbox .ui-btn,
        form fieldset.right-full-format div.ui-radio .ui-btn {
            width: 100%;
        }

        form fieldset.right-split-format label.ui-input-text,
        form fieldset.right-split-format label.ui-select,
        form fieldset.right-split-format div.ui-controlgroup-label,
        form fieldset.right-split-format legend {
            float: right;
            width: 48%;
        }

        form fieldset.right-split-format input.ui-input-text,
        form fieldset.right-split-format div.ui-input-search,
        form fieldset.right-split-format textarea.ui-input-text {
            float: left;
            width: 50%;
        }

        form fieldset.right-split-format div.ui-checkbox,
        form fieldset.right-split-format div.ui-radio,
        form fieldset.right-split-format div.ui-select,
        form fieldset.right-split-format div.ui-btn {
            width: 50%;
        }

        form fieldset.right-split-format div.ui-select div.ui-btn {
            margin-left: 0;
        }

        form fieldset.right-split-format .ui-checkbox,
        form fieldset.right-split-format .ui-radio {
            clear: left;
            /* Set to opposite side of the legend is float direction */
        }

        form fieldset.right-split-format.ui-controlgroup-horizontal div.ui-checkbox,
        form fieldset.right-split-format.ui-controlgroup-horizontal div.ui-radio {
            float: right;
        }

        form fieldset.right-split-format.ui-controlgroup-horizontal div.ui-checkbox:first-child,
        form fieldset.right-split-format.ui-controlgroup-horizontal div.ui-radio:first-child {
            margin-right: 2%;
        }

        form fieldset.right-split-format div.ui-select .ui-btn,
        form fieldset.right-split-format div.ui-checkbox .ui-btn,
        form fieldset.right-split-format div.ui-radio .ui-btn {
            width: 100%;
        }
        /* Export specific */

        body {
            font-size: 16px;
            line-height: 1.4;
            font-family: Arial, Tahoma, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
        }

        a,
        a:visited {
            color: #3283c8;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin-top: 0;
        }

        h1:last-child,
        h2:last-child,
        h3:last-child,
        h4:last-child,
        h5:last-child,
        h6:last-child {
            margin-bottom: 0;
        }

        p:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .export-hidden,
        .hidden {
            display: none;
        }

        .clearboth {
            clear: both;
        }

        .clearleft {
            clear: left;
        }

        .clearright {
            clear: right;
        }

        .smallitalic {
            font-size: 80%;
            text-decoration: italic;
        }

        .nomargin {
            margin: 0;
        }

        .nopadding {
            padding: 0;
        }

        .right {
            float: right;
        }

        .left {
            float: left;
        }

        .application-header {
            background: #f0f0f0;
            padding: .2em 1em;
            border-bottom: 1px solid #999999;
        }

        .content-instructions {
            background: #f0f0f0;
            border: #cccccc 5px solid;
            color: #3d263a;
            float: none !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
            text-shadow: none !important;
            padding: 15px;
            margin-bottom: 15px;
        }

        .content-group {
            border: #cccccc 1px solid;
        }

        .content-group,
        li[data-role='list-collapsible-content'] {
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid #999999;
        }

        .ui-content {
            border-width: 0;
            overflow: visible;
            padding: 15px;
        }

        .ui-shadow {
            -webkit-box-shadow: none !important;
        }

        .ui-bar-f {
            background-image: none !important;
        }

        .ui-li-heading {
            color: #000 !important;
            text-shadow: none !important;
        }

        .list-collapsible {
            page-break-inside: avoid !important;
        }

        .list-collapsible [data-role=list-collapsible-content] {
            display: block !important;
        }

        fieldset .help-text {
            display: none;
        }

        .list-collapsible [data-role=list-collapsible] .ui-icon-example:first-child {
            display: none;
        }

        .content-instructions .ui-notice,
        .content-group .ui-notice,
        .ui-notice {
            display: none;
        }

        .content-instructions .text-output {
            background: #ffffff;
        }

        legend + .text-output,
        label + .text-output {
            margin-top: 5px;
            padding: 5px;
            border-color: #999999;
            border-style: solid;
            border-width: 1px;
        }

        .text-output.ui-controlgroup {
            border: none;
        }

        .text-output.ui-controlgroup div {
            border-color: #999999;
            border-style: solid;
            border-width: 0 1px 1px 1px;
        }

        .text-output.ui-controlgroup div:first-child {
            border-top-width: 1px;
        }

        .ui-controlgroup-horizontal .text-output.ui-controlgroup div {
            border-width: 1px 1px 1px 0;
        }

        .ui-controlgroup-horizontal .text-output.ui-controlgroup div:first-child {
            border-left-width: 1px;
        }

        .ui-radio,
        .ui-checkbox {
            font-size: 16px;
            line-height: 1;
        }

        .ui-controlgroup div:nth-child(even) {
            background: #f0f0f0;
        }

        .ui-controlgroup-horizontal .ui-controlgroup div:nth-child(odd) {
            background: #f0f0f0;
        }

        .text-output.ui-controlgroup.ui-input-search {
            padding: 0;
        }

        .text-output.ui-controlgroup.ui-input-search div {
            padding: .2em 0;
            margin: 0;
        }

        fieldset {
            border: none;
        }

        form div.ui-radio .ui-icon.ui-icon-example {
            border: none;
        }

        form li[role='heading'] {
            background: #dcdcdb;
        }

        form ul[data-role='listview'] {
            list-style: none;
            margin-left: 0;
            padding: 0 .75em;
        }

        form ul[data-role='listview'] li {
            position: relative;
            border-bottom: 1px solid #999999;
        }

        form ul[data-role='listview'] li:last-child {
            border-bottom: none;
        }

        form div.list-static-none {
            margin-bottom: 1em;
        }

        .grouping-header,
        form li[data-role='list-divider'] {
            background: #dcdcdb;
            padding: .2em .5em;
        }

        .ui-li-count {
            position: absolute;
            font-size: 11px;
            font-weight: bold;
            padding: .2em .5em;
            top: 50%;
            margin-top: -.9em;
            right: 10px;
        }

        form .uploadifive-container ul {
            margin: 0;
            padding: 0;
        }

        form .uploadifive-container ul p {
            margin: 0;
            font-size: 10px;
            font-style: italic;
        }

        form .uploadifive-container .message:not(:last-child) {
            display: none;
        }

        .summary-table,
        .compare-table {
            margin: 0;
            padding: 0;
        }

        .summary-table span:not(.html-icon-green, .html-icon-red):not(:empty) {
            display: block;
        }

        .demographics h3,
        .study-team-summary h3,
        .study-team-summary fieldset,
        .study-team-summary fieldset div,
        .location-summary h3,
        .location-summary fieldset,
        .location-summary fieldset div,
        .devices-summary h3,
        .devices-summary fieldset,
        .devices-summary fieldset div,
        .drugs-summary h3,
        .drugs-summary fieldset,
        .drugs-summary fieldset div,
        .radiation-exam-summary h3,
        .radiation-exam-summary fieldset,
        .radiation-exam-summary fieldset div {
            margin: 0;
            padding: 0;
        }

        .location-summary label + .text-output {
            border: none;
            padding-top: .4em;
        }

        .summary-table dt {
            background: #eeeeee;
            padding: .3em;
            margin: 0;
        }

        .summary-table dd {
            margin: .3em 0 .3em 2em;
        }

        .team-designation h3,
        .local-context-summary h3 {
            background: #f0f0f0;
            border-bottom: 1px solid #999999;
        }

        .team-designation[data-designation=Undefined],
        *[data-designation] .summary-table dd,
        *[data-designation] .summary-table dt {
            display: none;
        }

        *[data-designation=Principal-Investigator] .summary-table .team-pi,
        *[data-designation=Co-Investigator] .summary-table .team-coi,
        *[data-designation=Key-Personnel] .summary-table .team-personnel,
        *[data-designation=Additional-Contact] .summary-table .team-contact,
        *[data-designation=External-Collaborator] .summary-table .team-external {
            display: block;
        }

        .team-member-appointment {
            display: block;
        }

        .team-member-appointment + .team-member-appointment {
            border-top: 1px solid #eeeeee;
            padding-top: .3em;
            margin-top: .3em;
        }

        .team-personnel.team-member-activities {
            white-space: normal;
        }

        .team-personnel fieldset {
            padding: 0;
        }

        .team-personnel fieldset div {
            padding: 0;
        }

        .summary-table-left {
            width: 49.5%;
            float: left;
            padding-right: 1%;
        }

        .summary-table-right {
            width: 49.5%;
            margin-left: 50.5%;
        }

        .summary-table-one-of-three,
        .summary-table-two-of-three {
            width: 32%;
            float: left;
            padding-right: 2%;
        }

        .summary-table-three-of-three {
            width: 32%;
            margin-left: 68%;
        }

        .compare-table {
            display: table;
        }

        .compare-table-row {
            display: table-row;
        }

        .compare-table-cell {
            display: table-cell;
            padding: .5em;
            width: 50%;
        }
        /* Comparison highlighting */

        del,
        div.diff-deleted h3,
        /* div.diff-deleted dt, */

        div.diff-deleted dd,
        div.diff-deleted label,
        li.diff-deleted,
        fieldset.diff-deleted,
        div.diff-deleted fieldset
        /*,
div.diff-deleted li[data-role='list-divider'] */

        {
            background-color: #ffcccc;
            text-decoration: line-through;
        }

        div.page-deleted {
            border-left: 2em solid #ffcccc;
            padding-left: 1em;
            border-right: 2em solid #ffcccc;
            padding-right: 1em;
        }

        span.ui-icon.ui-icon-none.diff-unchecked.ui-icon-example,
        div.diff-unchecked {
            background-color: #ffcccc;
        }

        ins,
        div.diff-added h3,
        /* div.diff-added dt, */

        div.diff-added dd,
        div.diff-added label,
        li.diff-added,
        fieldset.diff-added,
        div.diff-added fieldset,
        /* div.diff-added li[data-role='list-divider'], */

        div.diff-checked,
        span.ui-icon.ui-icon-check.diff-checked.ui-icon-example {
            background-color: #ccffcc;
            text-decoration: none;
        }

        div.page-added {
            border-left: 2em solid #ccffcc;
            padding-left: 1em;
            border-right: 2em solid #ccffcc;
            padding-right: 1em;
        }

        li.diff-duplicate,
        div.diff-duplicate {
            background-color: #ddf0ff;
            /* previously #a9dbff; */
            text-decoration: none;
        }

        #hgt-div {
            margin-top: 1.17em;
        }

        .list-item {
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
            border: 1px solid #cccccc;
        }
    </style>



    <div class="application-header">
        <h1>2017B0152: There and Back Again: Materializing Mythic Worlds through Fan Pilgrimages</h1>
    </div>
    <form class="application-main">
        <div data-role="content" class="content-main ui-content ui-body-a" role="main">

            

            

            

            
            
            

            

            

            

            

            

            

            

            

            

            <!-- eIRB Form Definition and Flow, Page 40-->

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            
            
            
            
            
            
            
            
            

            

            

            

        <div id="Scopeofchangesattimeofamendment" data-comment-section="Scope of changes at time of amendment"><div data-role="content" class="content-instructions">
                <h2>Scope of changes at time of amendment</h2>

                <fieldset class="left-full-format" name="title" id="fieldset-title" data-theme="a">
                    <label for="title" class="ui-input-text" id="question-label-57" data-comment-block="true">Title of Study</label>
                    <div class="left-full-format text-output ui-input-search" name="title" id="title" data-theme="a" title="You must enter a study title to continue." data-comment-inline="true">There and Back Again: Materializing Mythic Worlds through Fan Pilgrimages</div>
                </fieldset>
                <fieldset class="left-full-format" name="pi-name" id="fieldset-pi-name" data-theme="a">
                    <label for="pi-name" class="ui-input-text" id="question-label-58" data-comment-block="true">Principal Investigator</label>
                    <div class="left-full-format text-output ui-input-search" name="pi-name" id="pi-name" data-theme="a" data-comment-inline="true">Hugh Urban (urban.41)</div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <input type="hidden" class="full-format hidden" name="" id="exempt" value="false">
                <input type="hidden" class="full-format hidden" name="" id="external" value="false">
                <fieldset class="ui-required left-split-format ui-controlgroup-horizontal" data-theme="b" name="hasPiChanges" id="fieldset-has-pi-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-59" data-comment-block="true">Is the PI changing for this study?</legend>
                    <div class="text-output ui-input-search" id="has-pi-changes" name="hasPiChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required left-split-format ui-controlgroup-horizontal" data-theme="b" name="hasStudyTeamChanges" id="fieldset-has-study-team-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-60" data-comment-block="true">Are there any changes to the Ohio State study team (i.e., co-investigator and/or key personnel)? For external collaborators, see below.</legend>
                    <div class="text-output ui-input-search" id="has-study-team-changes" name="hasStudyTeamChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required hidden left-split-format ui-controlgroup-horizontal" data-theme="b" name="hasStudyTeamDocumentChanges" id="fieldset-has-study-team-document-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-61" data-comment-block="true">Do the <b>PI and/or study team changes</b> require revisions to study documents such as protocol, informed consent form(s), or recruitment materials (e.g., to update name or contact information)?</legend>
                    <div class="text-output ui-input-search" id="has-study-team-document-changes" name="hasStudyTeamDocumentChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required left-split-format ui-controlgroup-horizontal" data-theme="b" name="hasStudyChanges" id="fieldset-has-study-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-62" data-comment-block="true">Are there any other changes you would like to make for this study (e.g., external collaborators, participant numbers, new population requests, recruitment process)?</legend>
                    <div class="text-output ui-input-search" id="has-study-changes" name="hasStudyChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;■ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;□ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>

                <div class="hidden" id="personnel-change-message">
                    <div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                        <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                        <p>The personnel changes you are making may qualify for a quicker review process using a personnel change request. If you would like to take advantage of this faster review process, please click <a href="https://orapps.osu.edu/buck-irb/index/amendment-to-personnel-change-request/study/33270">Start/Edit Personnel Change</a>. If you would like to continue with these changes as part of the current amendment submission, please confirm this below to continue. <b>For external collaborator changes, the personnel change request can only be used to remove external collaborators. All additions or modifications of external collaborators must go through the full amendment process.</b></p>
                    </div>
                    <div class="ui-checkbox ">&nbsp;□ <span class="-text">Continue and change the study team as an amendment.</span></div>
                </div>

                <div class="hidden" id="deletion-message">
                    <div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                        <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                        <p><strong>Caution!</strong> Changing your response for "any other changes" from <i>Yes</i> to <i>No</i> will delete all saved information in your current submission. To continue, please confirm this choice below.</p>
                    </div>
                    <div class="ui-checkbox ">&nbsp;□ <span class="-text">Delete all saved information in my current submission and allow me to start over.</span></div>
                </div>
            </div></div><div id="ProposedChanges" data-comment-section="Proposed Changes"><div data-role="content" class="content-instructions">
                <h2>Proposed Changes</h2>
                <p>Select all appropriate pages below that correspond to revisions being made to the study. When applicable, form pages should be revised to reflect changes and/or new information, in addition to revising associated documents. For migrated studies, because only basic data were migrated it may be necessary to import additional information to revise the study.</p>
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p>Note: Leave this section blank for document changes only.</p>
                </div>

            </div><div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                <p>You cannot undo selections made on this page once your submission is under review.</p>
            </div><div class="hidden" id="deletion-message-header">
                <div class="ui-notice ui-notice-error" data-role="content" data-theme="c">
                    <span class="ui-icon ui-icon-alert-red ui-icon-example">&nbsp;</span>
                    <p>See caution below before confirming that you want to continue with these changes.</p>
                </div>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format" data-theme="b" name="amend-sections" id="fieldset-amend-sections">
                    <legend class="ui-controlgroup-label" id="question-label-63" data-comment-block="true">Will changes be made to any of the following? (check all applicable pages; leave blank for document changes only)</legend>
                    <div class="text-output ui-input-search" id="amend-sections" name="amend-sections" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Funding</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">External Collaborators</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Multi-Site Study</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Location of Research</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Institutional Approvals</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Summary, Background, and Objectives</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Research Methods and Activities</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Duration</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Number of Participants</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Participant Population</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Participant Identification</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Incentives to Participate</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Alternatives to Participation</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Informed Consent Process</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Participant Privacy</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Confidentiality of data</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">HIPAA Research Authorization</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Reasonably Anticipated Benefits</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Risks, Harms, and Discomforts</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Assessment of Risks and Benefits</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Monitoring</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Participant Costs / Reimbursements</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
            </div><div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                <p>You cannot undo selections made on this page once your submission is under review. Contact ORRP with questions.</p>
            </div><div class="hidden" id="deletion-message">
                <div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                    <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                    <p><strong>Caution!</strong> Unchecking a selection on this page will delete all saved information in your current submission. To continue, please confirm this choice below. Note: Information will not be lost if a new selection is added.</p>
                </div>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Delete all saved information in my current submission and allow me to start over.</span></div>
            </div></div><div id="LocationofResearch" data-comment-section="Location of Research"><div data-role="content" data-theme="b" class="content-instructions">
                <h2>Location of Research</h2>
                <p>The current locations of research where research was or is being conducted are listed below. If changes are necessary, click 'Add Site' in the appropriate category to add a location or click the ‘X’ next to a site to remove it.</p>
                <p>Research to be conducted at locations other than approved performance sites may require a letter of support or another institution’s approval if personnel are engaged. See <a href="http://www.hhs.gov/ohrp/policy/engage08.html" target="_blank">OHRP Engagement Guidance</a> or contact ORRP at <a href="mailto:irbagreements@osu.edu">irbagreements@osu.edu</a> or 614-688-8457 for more information.</p>

            </div><div id="location-list">
    <div id="approvedstuff" data-comment-section="Ohio State Approved Research Sites" data-comment-section-level="1">
        <div data-role="header" data-theme="f" class="grouping-header">
                    <h3>Ohio State Approved Research Sites</h3></div><div class="list-static-none"><i>You have listed no Ohio State approved research sites.</i></div>
    </div>
    <div id="domesticstuff" data-comment-section="Domestic Research Sites - Non-Ohio State Locations" data-comment-section-level="1">
        <div data-role="header" data-theme="f" class="grouping-header">
                    <h3>Domestic Research Sites – Non-Ohio State Locations</h3></div><div data-role="content" data-theme="a" class="list-item location-summary ">
                    <h3>Wizarding World of Harry Potter, Orlando, FL - only participant observation will be conducted at this site. No recruitment, surveying, or interviewing of participants will happen on-site.</h3>
                    <fieldset class="left-full-format" name="location-64788" id="fieldset-location-64788">
                        <label for="location-64788" class="ui-input-text" id="question-label-64" data-comment-block="true">Address</label>
                        <div class="left-full-format text-wrap ui-input-search" name="location-64788" id="location-64788">6000 Universal Blvd
                            <br>Orlando, FL</div>
                    </fieldset>
                    <fieldset class="left-full-format" name="personnel-activities" id="fieldset-personnel-activities">
                        <label for="personnel-activities" class="ui-input-text" id="question-label-65" data-comment-block="true">Research activities by</label>
                        <div class="left-full-format text-wrap ui-input-search" name="personnel-activities" id="personnel-activities">Ohio State personnel only</div>
                    </fieldset>
                    <fieldset class="left-full-format" name="is-osu-irb-of-record" id="fieldset-is-osu-irb-of-record">
                        <label for="is-osu-irb-of-record" class="ui-input-text" id="question-label-66" data-comment-block="true">Using OSU as IRB of record</label>
                        <div class="left-full-format text-wrap ui-input-search" name="is-osu-irb-of-record" id="is-osu-irb-of-record"></div>
                    </fieldset>
                    <fieldset class="left-full-format" name="domestic-site-files-1526450379" id="fieldset-domestic-site-files-1526450379">
                        <label class="ui-input-text" for="domestic-site-files-1526450379" id="question-label-67" data-comment-block="true">Letter of support / IRB approval</label>
                        <div class="uploadifive-container text-output ui-input-search" id="domestic-site-files-1526450379" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;domestic-site-files-1526450379&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                            <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                                <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                    <li data-role="list-divider" role="heading">Uploaded Files</li>
                                    <li class="message"><i>No files have been uploaded.</i></li>
                                </ul>
                            </div>
                        </div>
                    </fieldset>
                    <div class="local-context-summary">
                    </div>
                    <br class="clear-both">
                </div>
    </div>
    <div id="internationalstuff" data-comment-section="International Research Sites" data-comment-section-level="1">
        <div data-role="header" data-theme="f" class="grouping-header">
                    <h3>International Research Sites</h3></div><div data-role="content" data-theme="a" class="list-item location-summary ">
                    <h3>Fan pilgrimage shrines - Ianto shrine, Roald Dahl Plass, Cardiff, UK; Sherlock shrine, St. Bartholomew's Hospital exterior, London, UK; Platform 9 3/4, King's Cross Station, London, UK; North Gower Street, London, UK (some research conducted on tours with Brit Movie Tours); also public locations adjacent to the Warner Bros. Studio Tour and the Doctor Who Experience</h3>

                    <dl class="summary-table summary-table-one-of-three">
                        <dt>Primary contact</dt>
                        <dd>
                            <fieldset class="full-format" name="location-primary-contact-4252" id="fieldset-location-primary-contact-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-primary-contact-4252" id="location-primary-contact-4252">Lewis Swan, Brit Movie Tours
                                    <br><a href="tel:+44 0844 2471 007">+44 0844 2471 007</a>
                                    <br><a href="mailto:lewis@britmovietours.com">lewis@britmovietours.com</a></div>
                            </fieldset>
                        </dd>
                    </dl>
                    <dl class="summary-table summary-table-two-of-three">
                        <dt>Local consultant #1</dt>
                        <dd>
                            <fieldset class="full-format" name="location-local-consultant-one-4252" id="fieldset-location-local-consultant-one-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-local-consultant-one-4252" id="location-local-consultant-one-4252">Dr. Kathy Larsen
                                    <br>Lecturer, George Washington University
                                    <br><a href="mailto:klarsen@gwu.edu">klarsen@gwu.edu</a></div>
                            </fieldset>
                        </dd>
                    </dl>
                    <dl class="summary-table summary-table-three-of-three">
                        <dt>Local consultant #2</dt>
                        <dd>
                            <fieldset class="full-format" name="location-local-consultant-two-4252" id="fieldset-location-local-consultant-two-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-local-consultant-two-4252" id="location-local-consultant-two-4252">Dr. Jennifer Otter Bickerdike
                                    <br>Course Leader, British and Irish Modern Music Institute
                                    <br><a href="mailto:job@jenniferotterbickerdike.com">job@jenniferotterbickerdike.com</a></div>
                            </fieldset>
                        </dd>
                    </dl>

                    <dl class="summary-table">
                        <dt>Research activities by</dt>
                        <dd>
                            <fieldset class="full-format" name="personnel-activities" id="fieldset-personnel-activities">
                                <div class="full-format text-wrap ui-input-search" name="personnel-activities" id="personnel-activities">Ohio State personnel only</div>
                            </fieldset>
                        </dd>

                        <dt>Using OSU as IRB of record</dt>
                        <dd></dd>

                        <dt>Languages</dt>
                        <dd>
                            <fieldset class="full-format" name="location-languages-4252" id="fieldset-location-languages-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-languages-4252" id="location-languages-4252">English;</div>
                            </fieldset>
                        </dd>

                        <dt>Has fluent team members</dt>
                        <dd>
                            <fieldset class="full-format" name="location-fluent-team-member-4252" id="fieldset-location-fluent-team-member-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-fluent-team-member-4252" id="location-fluent-team-member-4252">Yes</div>
                            </fieldset>
                        </dd>

                        <dt>Has children enrolled</dt>
                        <dd>
                            <fieldset class="full-format" name="location-enrolled-children-4252" id="fieldset-location-enrolled-children-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-enrolled-children-4252" id="location-enrolled-children-4252">Yes</div>
                            </fieldset>
                        </dd>
                        <dt>Local child consent exceptions</dt>
                        <dd>
                            <fieldset class="full-format" name="location-children-exceptions-4252" id="fieldset-location-children-exceptions-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-children-exceptions-4252" id="location-children-exceptions-4252">As in the United States, the age of majority in England and Wales is 18. However, young people may legally provide consent for research purposes at age 16 (please see the website of the European Union Agency for Fundamental Rights, http://fra.europa.eu/en/theme/rights-child/child-participation-in-research). This study will include participants ages 16 and 17 in the survey phase only, in which case every effort will be made to gain parental consent as well. </div>
                            </fieldset>
                        </dd>

                        <dt>International influences</dt>
                        <dd>
                            <fieldset class="full-format" name="location-international-influences-4252" id="fieldset-location-international-influences-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-international-influences-4252" id="location-international-influences-4252">Not Applicable</div>
                            </fieldset>
                        </dd>

                        <dt>Local consent exceptions</dt>
                        <dd>
                            <fieldset class="full-format" name="location-local-consent-exceptions-4252" id="fieldset-location-local-consent-exceptions-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-local-consent-exceptions-4252" id="location-local-consent-exceptions-4252">Not Applicable</div>
                            </fieldset>
                        </dd>

                        <dt>Compensation plan</dt>
                        <dd>
                            <fieldset class="full-format" name="location-compensation-plan-4252" id="fieldset-location-compensation-plan-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-compensation-plan-4252" id="location-compensation-plan-4252">Not Applicable</div>
                            </fieldset>
                        </dd>

                        <dt>Community benefit</dt>
                        <dd>
                            <fieldset class="full-format" name="location-community-benefit-4252" id="fieldset-location-community-benefit-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-community-benefit-4252" id="location-community-benefit-4252">There are no material benefits to the local community. Most participants are expected to be tourists.</div>
                            </fieldset>
                        </dd>

                        <dt>Related regional training</dt>
                        <dd>
                            <fieldset class="full-format" name="location-regional-training-4252" id="fieldset-location-regional-training-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-regional-training-4252" id="location-regional-training-4252">The researcher has traveled extensively in the United Kingdom and has experience visiting the field sites in question as a participant and interested observer of fan pilgrimage. She has no existing relationship with any likely participants.</div>
                            </fieldset>
                        </dd>

                        <dt>Communication plan</dt>
                        <dd>
                            <fieldset class="full-format" name="location-communication-plan-4252" id="fieldset-location-communication-plan-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-communication-plan-4252" id="location-communication-plan-4252">The researcher will have regular internet access and can easily use Buck-IRB. If urgent issues arise, phone calls are more than possible. It is not anticipated that ongoing contact with the IRB will be necessary.</div>
                            </fieldset>
                        </dd>

                        <dt>Data management plan</dt>
                        <dd>
                            <fieldset class="full-format" name="location-data-management-4252" id="fieldset-location-data-management-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-data-management-4252" id="location-data-management-4252">Hard copy data (such as survey forms, consent forms, and field notes) will be carried by the researcher on her person or stored in a secure and locked space, such as a hostel locker, hotel safe, or locked private room. Digital data, such as electronic interview transcripts, photos, and audio recordings will be transferred to the researcher's personal computer (which will also be kept locked or on her person, and is password-protected) and to Buckeye Box whenever possible, contingent on the strength of upload connections for very large audio files.</div>
                            </fieldset>
                        </dd>

                        <dt>Has medical procedures/treatments</dt>
                        <dd>
                            <fieldset class="full-format" name="location-medical-procedures-4252" id="fieldset-location-medical-procedures-4252">
                                <div class="full-format text-wrap ui-input-search" name="location-medical-procedures-4252" id="location-medical-procedures-4252">No</div>
                            </fieldset>
                        </dd>

                        <dt>Letter of support / Review approval</dt>
                        <dd>
                            <fieldset class="full-format" name="international-site-files-1486781740" id="fieldset-international-site-files-1486781740">
                                <div class="uploadifive-container text-output ui-input-search" id="international-site-files-1486781740" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;international-site-files-1486781740&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                                    <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                                        <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                            <li data-role="list-divider" role="heading">Uploaded Files</li>
                                            <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                            <li data-icon="false" class="diff-none" id="file-upload-2" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507048" class="filename" target="_BLANK">Swan_BritMovieTours_Correspondence.pdf</a>
                                                <p>Uploaded by Joanna Toy on 05/10/2017</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </fieldset>
                        </dd>
                    </dl>

                    <div class="local-context-summary">
                    </div>
                    <br class="clear-both">
                </div>
    </div>
                
                
                
                

                
                

            </div></div><div id="DocumentChanges" data-comment-section="Document Changes"><div data-role="content" class="content-instructions">
                <h2>Document Changes</h2>
                <p>In the appropriate upload boxes below, provide two versions of all revised documents: one with change(s) underlined ("tracked") and one with the change(s) incorporated ("clean"). If the currently approved version is not shown, that version should also be provided. Note: This should be necessary only for migrated studies.</p>
                <p>If there is not an appropriate upload box below for the revised document, enter the document on the "Other Files/Comments" page (found later in the application).</p>
                <p>Upload both a tracked and clean version of each revised document.</p>
            </div><div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                <p>Please upload a version of each revised document with change(s) underlined (or "tracked") and one version of each document with change(s) incorporated (clean).</p>
            </div><div data-role="content" class="content-group">
                <fieldset class="left-full-format" name="data-collection-files" id="fieldset-data-collection-files">
                    <label class="ui-input-text" for="data-collection-files" id="question-label-68" data-comment-block="true">Data collection forms and/or other instruments</label>
                    <div class="uploadifive-container text-output ui-input-search" id="data-collection-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;data-collection-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>No files have been uploaded.</i></li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="consent-files" id="fieldset-consent-files">
                    <label class="ui-input-text" for="consent-files" id="question-label-69" data-comment-block="true">Informed Consent Process</label>
                    <div class="uploadifive-container text-output ui-input-search" id="consent-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;consent-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-3" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507050" class="filename" target="_BLANK">ICF FINAL_Parental Consent for Survey 6-8-2017 Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-4" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507051" class="filename" target="_BLANK">ICF FINAL_Survey Informed Consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-5" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507052" class="filename" target="_BLANK">ICF FINAL_Interview informed consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-6" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507059" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-7" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507060" class="filename" target="_BLANK">Revised_InterviewInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-8" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507061" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-9" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507062" class="filename" target="_BLANK">Revised_InterviewInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-10" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507068" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-11" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507069" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="protocol-files" id="fieldset-protocol-files">
                    <label class="ui-input-text" for="protocol-files" id="question-label-70" data-comment-block="true">Research Protocol</label>
                    <div class="uploadifive-container text-output ui-input-search" id="protocol-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;protocol-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-12" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507044" class="filename" target="_BLANK">Toy_IRB_protocol_021217.docx</a>
                                    <p>Uploaded by Joanna Toy on 02/12/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-13" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507053" class="filename" target="_BLANK">Toy_IRB_protocol_CLEANCOPY_041218.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-14" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507054" class="filename" target="_BLANK">Toy_IRB_protocol_TRACKCHANGES_041218.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="recruitment-files" id="fieldset-recruitment-files">
                    <label class="ui-input-text" for="recruitment-files" id="question-label-71" data-comment-block="true">Recruitment materials (e.g., ads, fliers, website postings, and letters)</label>
                    <div class="uploadifive-container text-output ui-input-search" id="recruitment-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;recruitment-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-15" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507047" class="filename" target="_BLANK">Recruitment Script.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/05/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-16" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507055" class="filename" target="_BLANK">ParticipantRecruitment_Online.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="subject-information-files" id="fieldset-subject-information-files">
                    <label class="ui-input-text" for="subject-information-files" id="question-label-72" data-comment-block="true">Subject information (e.g., newsletters, instruction sheets, and appointment reminder cards)</label>
                    <div class="uploadifive-container text-output ui-input-search" id="subject-information-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;subject-information-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-17" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507049" class="filename" target="_BLANK">Revised_InfoSheet_CleanCopy.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/10/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-18" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507056" class="filename" target="_BLANK">InfoSheetForWeb.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-19" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507057" class="filename" target="_BLANK">Revised_InfoSheet_CLEANCOPY.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-20" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507058" class="filename" target="_BLANK">Revised_InfoSheet_TRACKCHANGES.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="survey-questionnaire-files" id="fieldset-survey-questionnaire-files">
                    <label class="ui-input-text" for="survey-questionnaire-files" id="question-label-73" data-comment-block="true">Surveys and/or questionnaires</label>
                    <div class="uploadifive-container text-output ui-input-search" id="survey-questionnaire-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;survey-questionnaire-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-21" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507043" class="filename" target="_BLANK">Master Survey Template.docx</a>
                                    <p>Uploaded by Joanna Toy on 02/12/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-22" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507046" class="filename" target="_BLANK">SampleInterviewQuestions.docx</a>
                                    <p>Uploaded by Joanna Toy on 04/01/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-23" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507063" class="filename" target="_BLANK">Toy_SurveyTemplate_CLEANCOPY_051518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/16/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-24" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507064" class="filename" target="_BLANK">Toy_SurveyTemplate_TRACKCHANGES_041618.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/16/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div></div><div id="SupplementalQuestions" data-comment-section="Supplemental Questions"><div data-role="content" class="content-instructions">
                <h2>Supplemental Questions</h2>
                <p>At the beginning of the application, you indicated changes to the research in the following areas:</p>
                <ul>
                    <li>Location of Research</li>
                    <li>Summary, Background, and Objectives</li>
                    <li>Research Methods and Activities</li>
                    <li>Number of Participants</li>
                    <li>Participant Population</li>
                    <li>Participant Identification</li>
                    <li>Informed Consent Process</li>
                </ul>
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p><b>Be as specific as possible when describing changes.</b> A rationale must be provided for each change made in the application form and/or uploaded documents. If the currently approved information for this aspect of the research is not shown, that information should also be provided. Note: This should be necessary only for migrated studies. <i>Clearly distinguish what is currently approved from the proposed change(s).</i></p>
                </div>

            </div><div data-role="content" class="content-group">
                <fieldset class="left-full-format ui-required" name="changesJustification" id="fieldset-changes-justification">
                    <label for="changes-justification" class="ui-input-text" id="question-label-74" data-comment-block="true">Describe the change(s) to the research and provide a rationale for each change.</label>
                    <div class="left-full-format text-output ui-input-search" name="changesJustification" id="changes-justification" data-comment-inline="true">During the first phase of the project, there were not enough survey/interview participants. The survey is being adapted for online use and participants will be recruited by word of mouth and in fandom spaces online to gather a larger pool of subjects. Some changes will also be made to the survey questions to elicit more relevant open-ended responses and to improve the accuracy of demographic information. These alterations do not involve any change in risk to participants or any substantive change in the aims of the project.</div>
                </fieldset>
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p>A rationale summary must be provided for all changes made in the application form pages as well as uploaded documents.</p>
                </div>
                <fieldset class="ui-required left-full-format ui-controlgroup-horizontal" data-theme="b" name="hasParticipantRiskChanges" id="fieldset-has-participant-risk-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-75" data-comment-block="true">Will there be any changes in the risk(s) to participants?</legend>
                    <div class="text-output ui-input-search" id="has-participant-risk-changes" name="hasParticipantRiskChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="left-full-format ui-required hidden" name="participantRiskChanges" id="fieldset-participant-risk-changes">
                    <label for="participant-risk-changes" class="ui-input-text" id="question-label-76" data-comment-block="true">Please explain:</label>
                    <div class="left-full-format text-output ui-input-search" name="participantRiskChanges" id="participant-risk-changes" data-comment-inline="true"></div>
                </fieldset>
                <fieldset class="ui-required left-full-format ui-controlgroup-horizontal" data-theme="b" name="hasParticipantBenefitsChanges" id="fieldset-has-participant-benefits-changes" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-77" data-comment-block="true">Will there be any change in the benefit(s) to the participants?</legend>
                    <div class="text-output ui-input-search" id="has-participant-benefits-changes" name="hasParticipantBenefitsChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text">Compensation is not to be a considered a benefit.</p>
                </fieldset>
                <fieldset class="left-full-format ui-required hidden" name="participantBenefitsChanges" id="fieldset-participant-benefits-changes">
                    <label for="participant-benefits-changes" class="ui-input-text" id="question-label-78" data-comment-block="true">Please explain:</label>
                    <div class="left-full-format text-output ui-input-search" name="participantBenefitsChanges" id="participant-benefits-changes" data-comment-inline="true"></div>
                </fieldset>
                <fieldset class="ui-required left-full-format ui-controlgroup-horizontal" data-theme="b" name="hasChangesAffectingWillingness" id="fieldset-has-changes-affecting-willingness" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-79" data-comment-block="true">Could the proposed change(s) affect participants' willingness to take part in the research?</legend>
                    <div class="text-output ui-input-search" id="has-changes-affecting-willingness" name="hasChangesAffectingWillingness" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="left-full-format ui-required hidden" name="changesAffectingWillingness" id="fieldset-changes-affecting-willingness">
                    <label for="changes-affecting-willingness" class="ui-input-text" id="question-label-80" data-comment-block="true">How will information be communicated to currently enrolled subjects (e.g., revised consent form, letter to participants)?</label>
                    <div class="left-full-format text-output ui-input-search" name="changesAffectingWillingness" id="changes-affecting-willingness" data-comment-inline="true"></div>
                </fieldset>
            </div></div><div id="SummaryBackgroundandObjectives" data-comment-section="Summary, Background, and Objectives"><div data-role="content" class="content-instructions">
                <h2>Summary, Background, and Objectives</h2>

            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="summaryBackgroundNonTech" id="fieldset-summary-background-nontech">
                    <label for="summary-background-nontech" class="ui-input-text" id="question-label-81" data-comment-block="true">Summarize the proposed research using <strong>non-technical</strong> language that can be readily understood by someone outside the discipline. <strong>Use complete sentences (limit 300 words).</strong></label>
                    <div class="full-format text-output ui-input-search" name="summaryBackgroundNonTech" id="summary-background-nontech" data-comment-inline="true">This research is a small study designed to collect pilgrimage stories and rationales from fans of the "Harry Potter" films and the BBC series "Doctor Who" and "Sherlock" through participant observation, surveys, and interviews. Data collected will be used to contextualize the visual and ritual structures of fan pilgrimage sites. The researcher will travel to the United Kingdom for three to four weeks, spending three to four days at each of seven fan pilgrimage sites: the Warner Brothers Studio Tour, King's Cross Station, and Christchurch College (Harry Potter); the Doctor Who Experience and the shrine to Ianto Jones in Cardiff (Doctor Who/Torchwood); and the shrine to Sherlock Holmes at Barts Hospital (Sherlock). The researcher will also visit tours operated by BritMovieTours. The researcher anticipates conducting additional participant-observation only at the Wizarding World of Harry Potter in Orlando, FL (no intervention with human subjects). At each site, the researcher will participate in the fan pilgrimage. On a subsequent day, the researcher will return to the site (or nearby public area) and approach visitors, inviting them to take a 10-minute written survey. Participants who participate in the survey will be asked if they are interested in being interviewed. To recruit additional subjects, the survey will also be made available in an electronic format and advertised in fandom social media spaces. Interviews will occur at a later time regardless of method of recruitment. It is anticipated that most interviews will be conducted via computer. Written consent will be obtained for both activities. Anticipated risks to participants are minimal. Survey and interview questions do not address any sensitive topics--they are concerned only with fans' pilgrimage stories and relationships to texts. Identifiable information will be collected in informed consent paperwork only, and that paperwork will be coded and separated from written surveys. Interview transcripts will also be anonymized. There are no anticipated material benefits; however, this research will open a new avenue to studies of fan pilgrimage, and strives to create productive and collaborative working experiences between researcher and fan communities. </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="summaryBackgroundSupport" id="fieldset-summary-background-support">
                    <label for="summary-background-support" class="ui-input-text" id="question-label-82" data-comment-block="true">Summarize existing knowledge and previous work that support the expectation of obtaining useful results without undue risk to human subjects. <strong>Use complete sentences (limit 300 words).</strong></label>
                    <div class="full-format text-output ui-input-search" name="summaryBackgroundSupport" id="summary-background-support" data-comment-inline="true">
                    This project emerges within an existing body of work on fan pilgrimage and tourism, most of which focuses on how fans experience spaces depicted on screen or in writing. 
<br><br>
Important work in this field has been done by Will Brooker (2007a, 2007b) on <i>Blade Runner</i> and <i>The X-Files</i>; Jennifer Porter (2004) on <i>Star Trek</i> conventions; Derek Alderman (2002) on <i>Graceland</i>; Nick Couldry (2000) on <i>EastEnders</i>, and Stijn Reijnders (2010, 2011) on detective television. 
<br><br>
These works stress the multiplicity of places at filming locations and the traces fans leave at them, occasionally incorporating ethnographic material. None of these authors, however, address fan pilgrimage as a religious phenomenon, or draw on significant studies of religious pilgrimage (Turner 1974; Eade and Sallnow 1991; Margry 2008; Plate 2009). 
<br><br>
My past work on “Sherlock” fan pilgrimage (forthcoming in the Journal of Fandom Studies as <i>"Constructing the Fannish Place: Ritual and Sacred Space in a Sherlock Fan Pilgrimage"</i>) enters this gap, arguing that fan pilgrimage places are genuinely sacred spaces, ritually co-created by fans. The present project follows that previous paper, addressing a specific absence I encountered. 
<br><br>
In the course of my research, I discovered a general lack of attention to how fans articulate and narrativize the relationship between their pilgrimages and the texts on which those visits are based. This absence includes most of the works cited above. While it is feasible to examine the ritual creation of fannish sacred spaces based on visible traces, ultimately such a study can only characterize these "containers," rather than the beliefs and discourses that fans bring to them. Without consideration of such discourses, understandings of how pilgrims understand pilgrimages are speculative. This study, therefore, seeks to collect a small sample of fans' pilgrimage rationales and stories, with the goal of enabling more nuanced study.

                    </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="summaryBackgroundAims" id="fieldset-summary-background-aims">
                    <label for="summary-background-aims" class="ui-input-text" id="question-label-83" data-comment-block="true">List the objectives and/or specific scientific or scholarly aims of the research study.</label>
                    <div class="full-format text-output ui-input-search" name="summaryBackgroundAims" id="summary-background-aims" data-comment-inline="true">This research aims to build a body of case studies of fans' pilgrimage stories and rationales. This data will be used in future articles and dissertation research. Primary Research Question My primary interest is in how fans talk about their pilgrimages—specifically, how they relate them to canon and fan narratives, and to what extent they do or do not see these relationships, and fan pilgrimage itself, as religious. What specific activities do they prioritize, and how do they articulate them? Do they reference specific narratives, elements of story-worlds, or plot points? Do they use religious terms, metaphorically or literally, to describe their travels and relationships with the text(s) involved? How do they react to the association of pilgrimage with religion? Secondary Research Question I am secondarily interested in whether responses to the questions above seem to vary depending on the degree to which the site or pilgrimage experience is commercially mediated. Because I do not expect this project, at this stage, to collect a very large sample of responses, this is not a question I can definitively answer, but one that is likely to be helpful as I determine how to address questions of commodification, access, and privilege that haunt all pilgrimages in future inquiries. Observations and demographic information (race/ethnicity, nation of origin, age, etc) collected through a survey (see methods section) will also help structure these future questions.
                    </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required left-full-format" name="researchProtocol" id="fieldset-protocol-files">
                    <label class="ui-input-text" for="protocol-files" id="question-label-84" data-comment-block="true">Upload research protocol</label>
                    <div class="uploadifive-container text-output ui-input-search" id="protocol-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;protocol-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-25" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507044" class="filename" target="_BLANK">Toy_IRB_protocol_021217.docx</a>
                                    <p>Uploaded by Joanna Toy on 02/12/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-26" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507053" class="filename" target="_BLANK">Toy_IRB_protocol_CLEANCOPY_041218.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-27" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507054" class="filename" target="_BLANK">Toy_IRB_protocol_TRACKCHANGES_041218.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p>A research protocol provides information such as the study objectives, background, detailed plan for conducting the research, and discussion of how the research findings will be analyzed.</p>
                </div>
            </div></div><div id="ResearchMethodsActivities" data-comment-section="Research Methods &amp; Activities"><div data-role="content" class="content-instructions">
                <h2>Research Methods &amp; Activities</h2>
                <p>Indicate any revisions to the research methods and activities below by revising text and/or changing selections of research activities.</p>
                <p>Use the boxes provided below to provide information on all interventions and activities that are to be performed in the research. Based on the selections chosen in the list of activities and components, completion of additional form pages may be necessary to provide required information for IRB review.</p>

            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="interactionsSummary" id="fieldset-interactions-summary">
                    <label for="interactions-summary" class="ui-input-text" id="question-label-85" data-comment-block="true">Identify and describe all interventions and interactions that are to be performed solely for the research study. Distinguish research (i.e., experimental) activities from non-research activities.</label>
                    <div class="full-format text-output ui-input-search" name="interactionsSummary" id="interactions-summary" data-comment-inline="true">This research involves three activities: participant-observation, surveys, and interviews. The participant observation component consists of the researcher performing fan pilgrimages, including participating as a paying visitor at commercial interactions. In this role, the researcher will also observe the general dynamics and activities of fan pilgrims without intervening. Field notes will be made. Photographs of sites and attractions may be taken, but participants will not be directly or recognizably photographed. In some public spaces, where it is of interest, the researcher may make recordings of ambient sounds. For example, in a public square that contains a fan shrine, the researcher might move herself some distance from the shrine and record the sounds of space as a whole; the intention would be to capture the pilgrimage in its spatial and human context. Field recordings would not include any intervention or interaction with fan pilgrims. The survey and interview components involve direct interventions with participants. The survey is a short written/digital instrument designed to take about ten minutes to complete, which collects basic demographic data and open-ended responses about the fan's experience at the pilgrimage site and relationship to the film, book, or TV show in question. Participation in the survey is entirely voluntary, and recruitment will be conducted either on-site or online (see participant identification section). Informed consent will be obtained. Interviews are a follow-up to the survey, although not all survey participants are expected to be interviewed. During the survey recruitment and completion, participants will be asked if they are willing to be interviewed to follow up on their responses. For those who say yes and provide contact information, interviews will be scheduled either in-person at a later time and other location, or in a computer-mediated form, most likely text-based real-time chat or Skype. (It is anticipated that most interviews will be conducted via computer.) These interviews will last about 30 minutes and will involve more in-depth, open-ended questions about fan pilgrimages, how they relate to the films/shows/books in question, and what connections the participant makes between being a fan and being religious (if any). In-person and Skype interviews will be recorded (audio only). Text-based online chat interviews will be saved as a transcript. All surveys, interview recordings, and interview transcripts will be appropriately anonymized. Any researcher notes made in relation to participants will also be anonymized (participants will be indicated according to their survey number).</div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required left-full-format" data-theme="b" name="activities" id="fieldset-activities">
                    <legend class="ui-controlgroup-label" id="question-label-86" data-comment-block="true">Make any necessary revisions to the current list of research activities by checking or un-checking the specific boxes.</legend>
                    <div class="text-output ui-input-search" id="activities" name="activities" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Audio, video, digital, or image recordings</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Biological sampling (other than blood)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Coordinating center</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Data repositories (future unspecified use, including research databases)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Data, not publicly available</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Data, publicly available</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Deception</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Diet, exercise, or sleep modifications</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Focus groups</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Food supplements</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Genetic testing</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Internet or e-mail data collection</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Magnetic resonance imaging (MRI)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Materials that may be considered sensitive, offensive, threatening, or degrading</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Non-invasive medical procedures (e.g., EKG, Doppler)</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Observation of participants (including field notes)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Oral history (does not include dental or medical history)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Program Protocol (Umbrella Protocol)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Randomization</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Record review (which may include PHI)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Specimen research</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Storage of biological materials (future unspecified use, including repositories)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Surveys, questionnaires, or interviews (group)</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Surveys, questionnaires, or interviews (one-on-one)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Other (Specify)</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden ui-required left-full-format" name="otherActivity" id="fieldset-other-activity">
                    <label for="other-activity" class="ui-input-text" id="question-label-87" data-comment-block="true">Specify the other activity</label>
                    <div class="left-full-format text-output ui-input-search" name="otherActivity" id="other-activity" title="Please specify the name for the other activity" data-comment-inline="true"></div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="left-full-format" name="dataCollectionFiles" id="fieldset-data-collection-files">
                    <label class="ui-input-text" for="data-collection-files" id="question-label-88" data-comment-block="true">Provide data collection forms, subject material, subject diaries, and/or other instruments, if applicable. Do not include case report forms for multi-site industry-initiated or cooperative group studies.</label>
                    <div class="uploadifive-container text-output ui-input-search" id="data-collection-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;data-collection-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>No files have been uploaded.</i></li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="ui-required left-full-format" name="surveyQuestionnaireFiles" id="fieldset-survey-questionnaire-files">
                    <label class="ui-input-text" for="survey-questionnaire-files" id="question-label-89" data-comment-block="true">Provide surveys, questionnaires, if applicable.</label>
                    <div class="uploadifive-container text-output ui-input-search" id="survey-questionnaire-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;survey-questionnaire-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-28" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507043" class="filename" target="_BLANK">Master Survey Template.docx</a>
                                    <p>Uploaded by Joanna Toy on 02/12/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-29" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507046" class="filename" target="_BLANK">SampleInterviewQuestions.docx</a>
                                    <p>Uploaded by Joanna Toy on 04/01/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-30" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507063" class="filename" target="_BLANK">Toy_SurveyTemplate_CLEANCOPY_051518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/16/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-31" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507064" class="filename" target="_BLANK">Toy_SurveyTemplate_TRACKCHANGES_041618.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/16/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="left-full-format" name="subjectInformationFiles" id="fieldset-subject-information-files">
                    <label class="ui-input-text" for="subject-information-files" id="question-label-90" data-comment-block="true">Provide subject information, such as newsletters, instruction sheets, appointment reminder cards, drug/device information, if applicable.</label>
                    <div class="uploadifive-container text-output ui-input-search" id="subject-information-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;subject-information-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-32" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507049" class="filename" target="_BLANK">Revised_InfoSheet_CleanCopy.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/10/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-33" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507056" class="filename" target="_BLANK">InfoSheetForWeb.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-34" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507057" class="filename" target="_BLANK">Revised_InfoSheet_CLEANCOPY.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-35" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507058" class="filename" target="_BLANK">Revised_InfoSheet_TRACKCHANGES.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div></div><div id="NumberofParticipants" data-comment-section="Number of Participants"><div data-role="content" class="content-instructions">
                <h2>Number of Participants</h2>
                <p>Revise the Ohio State and/or multi-site number of participants below by entering the new maximum number of participants in the appropriate box.</p>
                <p>The number of participants is defined as the number of individuals who agree to participate (i.e., those who provide consent or whose records are accessed, etc.) even if all do not prove to be eligible or complete the study. The total number of research participants may be increased only with prior IRB approval.</p>

            </div><div data-role="content" class="content-group">
                <h3>Approved Number of Participants</h3>
                <p>The participant numbers shown in this section refer to numbers approved prior to changes in this amendment.</p>
                <fieldset class="left-split-format" name="approvedParticipantGroups" id="fieldset-approved-participant-groups">
                    <label for="approved-participant-groups" class="ui-input-text" id="question-label-91" data-comment-block="true">Ohio State IRB approved number of participants (or records, specimens, etc.). This will be listed as groups (e.g., 50 teachers, 100 students) if that is how it was entered in the original application (this field is auto-calculated and not editable):</label>
                    <div class="left-split-format text-output ui-input-search" name="approvedParticipantGroups" id="approved-participant-groups" data-comment-inline="true">150 (Total numbers = 150)</div>
                </fieldset>
                <input type="hidden" class="full-format hidden" name="approved-population-total" id="approved-population-total" data-regex="((\.*)(?:\d+)(?:\,?)(?:\.\d*)?)" value="150">
                <fieldset class="hidden left-split-format ui-input-readonly" name="approvedTotalCrossSiteParticipants" id="fieldset-approved-total-cross-site-participants">
                    <label for="approved-total-cross-site-participants" class="ui-input-text" id="question-label-92" data-comment-block="true">Total number of participants to be enrolled across all sites.</label>
                    <div class="left-split-format text-output ui-input-search" type="number" name="approvedTotalCrossSiteParticipants" id="approved-total-cross-site-participants" readonly="true" data-comment-inline="true"></div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="participantGroups" id="fieldset-participant-groups">
                    <label for="participant-groups" class="ui-input-text" id="question-label-93" data-comment-block="true">Provide the total number of participants (or number of participant records, specimens, etc.) for whom you are seeking Ohio State University approval.</label>
                    <div class="full-format text-output ui-input-search" name="participantGroups" id="participant-groups" data-comment-inline="true">150</div>
                </fieldset>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Unlimited participant numbers</span></div>
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p>The total number of participants (or participant records, specimens, etc.) includes the research required goal number AND any additional participants (or records, specimens, etc) that withdraw or prove ineligible.</p>
                </div>
                <fieldset class="left-split-format ui-input-readonly" name="total-participant-increase" id="fieldset-total-participant-increase">
                    <label for="total-participant-increase" class="ui-input-text" id="question-label-94" data-comment-block="true">Increase to maximum number of participants (this field is auto-calculated and not editable):</label>
                    <div class="left-split-format text-output ui-input-search" name="total-participant-increase" id="total-participant-increase" readonly="true" data-comment-inline="true">0</div>
                </fieldset>
                <fieldset class="ui-required left-split-format ui-input-readonly" name="totalParticipants" id="fieldset-total-participants">
                    <label for="total-participants" class="ui-input-text" id="question-label-95" data-comment-block="true">Total number of participants</label>
                    <div class="left-split-format text-output ui-input-search" name="totalParticipants" id="total-participants" readonly="true" title="Please specify the total number of participants." data-comment-inline="true">150</div>
                </fieldset>
                <fieldset class="full-format ui-required" name="totalParticipantDetails" id="fieldset-total-participant-details">
                    <label for="total-participant-details" class="ui-input-text" id="question-label-96" data-comment-block="true">Explain how this number was derived (e.g., statistical rationale, attrition rate, etc.).</label>
                    <div class="full-format text-output ui-input-search" name="totalParticipantDetails" id="total-participant-details" data-comment-inline="true">The survey part of the research will include as many people as wish to participate, but is likely to be less than 150. I anticipate conducting 15-20 interviews.</div>
                </fieldset>
            </div></div><div id="ParticipantPopulation" data-comment-section="Participant Population"><div data-role="content" class="content-instructions">
                <h2>Participant Population</h2>
                <p>Make necessary revisions to study participant population by revising the text below and/or making appropriate population selections.</p>

            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required full-format" name="ageRange" id="fieldset-age-range">
                    <label for="age-range" class="ui-input-text" id="question-label-97" data-comment-block="true">Specify the age(s) of the individuals who may be included in the research:</label>
                    <div class="full-format text-output ui-input-search" name="ageRange" id="age-range" title="Please specify the participant population age(s)." data-comment-inline="true">16+</div>
                </fieldset>
                <fieldset class="ui-required full-format" data-theme="b" name="participantTypes" id="fieldset-participant-types">
                    <legend class="ui-controlgroup-label" id="question-label-98" data-comment-block="true">Specify the participant population(s). Check all participant groups that apply.</legend>
                    <div class="text-output ui-input-search" id="participant-types" name="participantTypes" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Adults</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Adults with decisional impairment</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Children</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Neonates (uncertain viability/nonviable)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Non-English speaking</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Pregnant women/fetuses – only if pregnant women will be intentionally recruited and/or studied.</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Prisoners</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Student research pools (e.g., psychology, linguistics)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Unknown (e.g., research using secondary data/specimens, non-targeted surveys, program protocols)</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden ui-required left-full-format" data-theme="a" name="studentPopulation" id="fieldset-student-population">
                    <legend class="ui-controlgroup-label" id="question-label-99" data-comment-block="true">Specify the student research pool(s)</legend>
                    <div class="text-output ui-input-search" id="student-population" name="studentPopulation" data-theme="ui-body-a" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Economics</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">REP (Psychology)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">LOC (Linguistics)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">CREP (Communication)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Political Science</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Music</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">ESSREP (Environmental &amp; Social Sustainability)</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden ui-required left-full-format" name="otherPopulation" id="fieldset-other-population">
                    <label for="other-population" class="ui-input-text" id="question-label-100" data-comment-block="true">Specify the other population</label>
                    <div class="left-full-format text-output ui-input-search" name="otherPopulation" id="other-population" maxlength="255" title="Please specify the other participant population." data-comment-inline="true"></div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="populationCharacteristics" id="fieldset-population-characteristics">
                    <label for="population-characteristics" class="ui-input-text" id="question-label-101" data-comment-block="true">Describe the characteristics of the proposed participants, and explain how the nature of the research requires/justifies their inclusion.</label>
                    <div class="full-format text-output ui-input-search" name="populationCharacteristics" id="population-characteristics" data-comment-inline="true">Proposed participants are primarily adults, but may also include older teenagers, who are participating in a fan pilgrimage and voluntarily agree to take a survey in specific circumstances. Online participants will be ages 18 and over without exception. No participants will be excluded based on any status other than age or language (see below).</div>
                </fieldset>
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasPopulationExclusions" id="fieldset-has-population-exclusions" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-102" data-comment-block="true">Will any participants be excluded based on age, gender, race/ethnicity, pregnancy status, language, education, or financial status?</legend>
                    <div class="text-output ui-input-search" id="has-population-exclusions" name="hasPopulationExclusions" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;■ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;□ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="full-format ui-required" name="exclusionJustification" id="fieldset-exclusion-justification">
                    <label for="exclusion-justification" class="ui-input-text" id="question-label-103" data-comment-block="true">Explain the criteria and reason(s) for each exclusion.</label>
                    <div class="full-format text-output ui-input-search" name="exclusionJustification" id="exclusion-justification" data-comment-inline="true">Age: participants under 16 will be excluded due to complications of gaining consent for children and the nature of the research questions, which investigate how fan tourists and pilgrims articulate their own reasons for deciding to visit a site. These questions are not applicable to children who have come to such sites on family trips. Due to the difficulty of getting parental consent, online participants will be at least 18 years of age (and will affirm their age in the survey consent process). Language: survey and interviews will be conducted in English. The researcher is an English speaker, field sites are in an English-speaking country, and the shows/films fans are responding to are in English. This will undoubtedly exclude some participants who have watched dubbed versions and speak other languages; however, it is an inevitable limitation of the project. This research does not claim to address transcultural or trans-linguistic fandom, but consciously limits itself to English speakers.</div>
                </fieldset>
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasVulnerableParticipants" id="fieldset-has-vulnerable-participants" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-104" data-comment-block="true">Are any of the participants likely to be vulnerable to coercion or undue influence?</legend>
                    <div class="text-output ui-input-search" id="has-vulnerable-participants" name="hasVulnerableParticipants" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text">Consider students, employees, terminally ill persons, or others who may have limited autonomy.</p>
                </fieldset>
                <fieldset class="full-format hidden ui-required" name="vulnerabilityProtectionPlan" id="fieldset-vulnerability-protection-plan">
                    <label for="vulnerability-protection-plan" class="ui-input-text" id="question-label-105" data-comment-block="true">Describe additional safeguards to protect participants' rights and welfare.</label>
                    <div class="full-format text-output ui-input-search" name="vulnerabilityProtectionPlan" id="vulnerability-protection-plan" data-comment-inline="true"></div>
                </fieldset>
            </div></div><div id="ParticipantIdentificationRecruitmentandSelection" data-comment-section="Participant Identification, Recruitment and Selection"><div data-role="content" class="content-instructions">
                <h2>Participant Identification, Recruitment and Selection</h2>
                <p>Make necessary revisions to participant identification process in the boxes below.</p>

            </div><div data-role="content" class="content-group">
                <h2>Participant Identification</h2>
                <fieldset class="full-format ui-required" name="successfulRecruitmentProcess" id="fieldset-successful-recruitment-process">
                    <label for="successful-recruitment-process" class="ui-input-text" id="question-label-106" data-comment-block="true">Provide evidence that you will be able to recruit the necessary number of participants to complete the study.</label>
                    <div class="full-format text-output ui-input-search" name="successfulRecruitmentProcess" id="successful-recruitment-process" data-comment-inline="true">Because of its exploratory, qualitative nature, this study does not have a fixed minimum number of participants. High visitor rates at many sites studied provide ample opportunities for participant observation and some opportunities for surveys and interviews, but the majority of recruitment for surveys and interviews will be done online. </div>
                </fieldset>
                <fieldset class="full-format ui-required" name="identificationMethod" id="fieldset-identification-method">
                    <label for="identification-method" class="ui-input-text" id="question-label-107" data-comment-block="true">Describe how potential participants will be identified (e.g., advertising, individuals known to the investigators, record review). Explain how the investigator(s) will gain access to this population, as applicable.</label>
                    <div class="full-format text-output ui-input-search" name="identificationMethod" id="identification-method" data-comment-inline="true">When recruitment is conducted at fan pilgrimage sites, participants will be identified based on their directly observed participation in fan pilgrimage activities. The researcher will then approach them and verbally invite them to take part in the survey phase of the research (see below for information sheet and recruitment script). For sites where permission cannot be obtained to conduct research at the site itself/on corporate property, the researcher will be positioned outside the attraction (on the sidewalk, at the bus stop, etc. as appropriate) on public property. When recruitment is conducted online, a link to the survey (which is designed to accommodate multiple sites) and invitation to participate will be posted in online fan spaces and distributed via word of mouth through the researcher's fan and fan studies contacts. Online spaces may include Facebook groups, Tumblr blogs, and other fan-oriented social media. Potential participants will be directed to an online version of the information sheet (see attached files) prior to beginning the survey.</div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <h2>Participant Recruitment and Selection</h2>
                <fieldset class="ui-required full-format" data-theme="b" name="personnelRecruit" id="fieldset-personnel-recruit">
                    <legend class="ui-controlgroup-label" id="question-label-108" data-comment-block="true">Select investigator(s) and/or key personnel who will recruit participants or identify records and/or specimens.</legend>
                    <div class="text-output ui-input-search" id="personnel-recruit" name="personnelRecruit" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Hugh Urban</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Joanna Toy</span></div>
                    </div>
                    <p class="help-text">If the study team member is not listed here, please make sure to include them in the <a href="https://orapps.osu.edu/buck-irb/update/study-team/study/33270">Study Team</a> section of this form.</p>
                </fieldset>
                <fieldset class="full-format ui-required" name="eligibilityProcess" id="fieldset-eligibility-process">
                    <label for="eligibility-process" class="ui-input-text" id="question-label-109" data-comment-block="true">Describe the process that will be used to determine participant eligibility.</label>
                    <div class="full-format text-output ui-input-search" name="eligibilityProcess" id="eligibility-process" data-comment-inline="true">Having identified potential participants as above, the researcher will use only two criteria to exclude individuals; otherwise, any identified person is eligible. The two criteria are ability to speak English (by necessity, since the survey and interviews are conducted in English, and because the greater part of Harry Potter, Doctor Who, and Sherlock fandoms are Anglophone), and age (there will be no participants under age 16). Language ability is easily ascertained by directly approaching participants. Fan pilgrims who appear to be under 16 will not be approached; for those who appear to be teenagers, verbal confirmation of age will be made and the age requirements explained. As of summer 2018, participants must be over the age of 18 due to the difficulty of obtaining parental consent during online recruitment. The online survey requires participants to state that they are at least 18 years old.</div>
                </fieldset>
                <fieldset class="full-format ui-required" name="recruitmentProcess" id="fieldset-recruitment-process">
                    <label for="recruitment-process" class="ui-input-text" id="question-label-110" data-comment-block="true">Describe the recruitment process, including the setting in which recruitment will take place. Enter 'not applicable' if the research involves only record review and no participant interaction.</label>
                    <div class="full-format text-output ui-input-search" name="recruitmentProcess" id="recruitment-process" data-comment-inline="true">On-site recruitment: Having identified potential participants, the researcher will approach individuals directly at the fan pilgrimage site and ask if they are willing to take part in a brief research survey (see sample recruitment script). In most cases, this will likely happen as participants are leaving the site, in order not to interfere with their experience. Recruitment will be verbal, with written materials available to facilitate further explanation of what the project is about and who the researcher is. For those who wish to participate, the informed consent process will be explained and forms completed, and then participants will fill out the survey (estimated to take about five to ten minutes). Participants 18 and older will be asked, verbally and on the survey, if they are willing to be interviewed in person or by computer-facilitated means (private chat or Skype). If they say yes, they will be asked to provide contact information so the researcher can follow up (this contact information will not be associated with their survey responses). Interviews will be scheduled at a later time and other location. For those who agree to be interviewed, the researcher will explain the project and the significance of the interview again before beginning the conversation, giving the participant the opportunity to opt out. Consent specific to the interview will be obtained. When recruitment is conducted online, a link to the survey (which is designed to accommodate multiple sites) and invitation to participate will be posted in online fan spaces and distributed via word of mouth through the researcher's fan and fan studies contacts. Online spaces may include Facebook groups, Tumblr blogs, and other fan-oriented social media. Potential participants will be directed to an online version of the information sheet (see attached files) prior to beginning the survey. As part of the survey, participants will be asked if they would like to participate in an interview and if so, may supply contact information. At the interview stage, the researcher will explain the project and significance of the interview again before beginning the conversation. Consent specific to the interview will be obtained.</div>
                </fieldset>
                <div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                    <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                    <p>The final versions of recruitment materials will be required before IRB approval.</p>
                </div>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="privacyProtectionJustification" id="fieldset-privacy-protection-justification">
                    <label for="privacy-protection-justification" class="ui-input-text" id="question-label-111" data-comment-block="true">Explain how the recruitment process respects potential participants' privacy.</label>
                    <div class="full-format text-output ui-input-search" name="privacyProtectionJustification" id="privacy-protection-justification" data-comment-inline="true">The recruitment process does not involve the sharing of any sensitive or potentially damaging information. Personally identifiable information collected through informed consent documentation will be separated from the anonymized written surveys. For those who participate in the online survey only, no personally identifiable information is collected. In the case of participants who agree to be contacted about participating in a follow-up interview, the contact information obtained will be kept with the consent documentation, separate from the surveys. This contact information will not be shared with other researchers or participants, or left where it is visible to others. </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format" name="recruitmentFiles" id="fieldset-recruitment-files">
                    <label class="ui-input-text" for="recruitment-files" id="question-label-112" data-comment-block="true">Provide copies of proposed recruitment materials (e.g., ads, fliers, website postings, and recruitment letters).</label>
                    <div class="uploadifive-container text-output ui-input-search" id="recruitment-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;recruitment-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-36" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507047" class="filename" target="_BLANK">Recruitment Script.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/05/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-37" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507055" class="filename" target="_BLANK">ParticipantRecruitment_Online.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="full-format" name="consentFiles" id="fieldset-consent-files">
                    <label class="ui-input-text" for="consent-files" id="question-label-113" data-comment-block="true">Provide copies of consent materials used during the recruitment process (e.g., oral/written scripts).</label>
                    <div class="uploadifive-container text-output ui-input-search" id="consent-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;consent-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-38" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507050" class="filename" target="_BLANK">ICF FINAL_Parental Consent for Survey 6-8-2017 Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-39" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507051" class="filename" target="_BLANK">ICF FINAL_Survey Informed Consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-40" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507052" class="filename" target="_BLANK">ICF FINAL_Interview informed consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-41" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507059" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-42" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507060" class="filename" target="_BLANK">Revised_InterviewInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-43" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507061" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-44" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507062" class="filename" target="_BLANK">Revised_InterviewInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-45" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507068" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-46" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507069" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div></div><div id="InformedConsentProcess" data-comment-section="Informed Consent Process"><div data-role="content" class="content-instructions">
                <h2>Informed Consent Process</h2>
                <p>Make necessary revisions to informed consent process by revising the text below and/or making appropriate consent process selections.</p>

            </div><div data-role="content" class="content-group">
                <div class="ui-notice ui-notice-notice" data-role="content" data-theme="b">

                    <p>See <a href="http://orrp.osu.edu/irb/irbforms/consent/" target="_blank">Consent for Research</a> for templates, HRPP policies <a href="http://orrp.osu.edu/files/2011/10/Informed-Consent-Process.pdf" target="_blank">Informed Consent Process and the Elements of Informed Consent</a>, <a href="http://orrp.osu.edu/files/2011/10/Documentation-of-Informed-Consent.pdf" target="_blank">Documentation of the Informed Consent Process</a> and <a href="http://orrp.osu.edu/files/2011/10/Assent-and-Parental-Permission.pdf" target="_blank">Assent and Parental Permission </a>or contact ORRP for more information.</p>
                </div>
                <fieldset class="ui-required left-full-format" data-theme="b" name="processes" id="fieldset-processes">
                    <legend class="ui-controlgroup-label" id="question-label-114" data-comment-block="true">Indicate the consent process(es) to be used in the study. Check all that apply.</legend>
                    <div class="text-output ui-input-search" id="processes" name="processes" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Informed Consent - Form</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Informed Consent - Verbal Script/Online</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Informed Consent – Addendum</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Alteration of Consent Process</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Alteration of Parental Permission</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Assent - Form</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Debriefing Script</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Assent - Verbal Script/Online</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Parental Permission - Form</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Parental Permission - Verbal Script/Online</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Translated Consent/Assent - Form(s)</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Waiver of Assent</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Waiver of Consent Process</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Waiver of Consent Documentation</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Waiver of Parental Permission</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Waiver of Parental Permission Documentation</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden ui-required left-full-format" name="otherConsentData" id="fieldset-other-consent-data">
                    <label for="other-consent-data" class="ui-input-text" id="question-label-115" data-comment-block="true">Specify the other consent process</label>
                    <div class="left-full-format text-output ui-input-search" name="otherConsentData" id="other-consent-data" title="Please specify the other consent data." data-comment-inline="true"></div>
                </fieldset>
            </div><div id="section-consent-files" data-role="content" class="content-group " data-files-required="hasConsentForm, hasConsentAlternative, hasConsentAddendum, hasProcessAlteration, hasParentalPermissionAlteration, hasAssentForm, hasDebriefingScript, hasAssentVerbalScript, hasParentalPermissionForm, hasParentalPermissionAlternative, hasTranslatedDocuments, hasDocumentationWaiver, hasParentalPermissionDocumentation" data-exempt="false">
                <fieldset class="ui-required full-format" name="consentFiles" id="fieldset-consent-files">
                    <label class="ui-input-text" for="consent-files" id="question-label-116" data-comment-block="true">Provide copies of all documents, as applicable.</label>
                    <div class="uploadifive-container text-output ui-input-search" id="consent-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;consent-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-47" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507050" class="filename" target="_BLANK">ICF FINAL_Parental Consent for Survey 6-8-2017 Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-48" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507051" class="filename" target="_BLANK">ICF FINAL_Survey Informed Consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-49" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507052" class="filename" target="_BLANK">ICF FINAL_Interview informed consent Clean.docx</a>
                                    <p>Uploaded by Ryan Max on 06/08/2017</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-50" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507059" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-51" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507060" class="filename" target="_BLANK">Revised_InterviewInformedConsentTRACKCHANGES_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-52" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507061" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-53" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507062" class="filename" target="_BLANK">Revised_InterviewInformedConsentCLEANCOPY_041818.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/13/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-54" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507068" class="filename" target="_BLANK">Revised_SurveyInformedConsentTRACKCHANGES_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                                <li data-icon="false" class="diff-none" id="file-upload-55" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507069" class="filename" target="_BLANK">Revised_SurveyInformedConsentCLEANCOPY_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required full-format" data-theme="b" name="obtainsConsent" id="fieldset-obtainsConsent">
                    <legend class="ui-controlgroup-label" id="question-label-117" data-comment-block="true">Select the investigator(s) and/or key personnel who will obtain consent from participants or their legally authorized representatives.</legend>
                    <div class="text-output ui-input-search" id="obtainsConsent" name="obtainsConsent" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">None</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Hugh Urban</span></div>
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Joanna Toy</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="consentProvider" id="fieldset-consent-provider">
                    <label for="consent-provider" class="ui-input-text" id="question-label-118" data-comment-block="true">Who will provide consent or permission (i.e., participant, legally authorized representative, parent and/or guardian)?</label>
                    <div class="full-format text-output ui-input-search" name="consentProvider" id="consent-provider" data-comment-inline="true">All participants will provide consent, regardless of age. For minors 16 and older who have a parent/guardian present, the parent will also consent to the minor's participation. However, under UK law and ethical best practices, 16-17-year-olds may consent to participate in research without a parent's permission. There will be no online participation by under-18s; as of summer 2018 participation by under-18s will no longer occur.</div>
                </fieldset>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Not Applicable</span></div>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="consentProcessDetails" id="fieldset-consent-process-details">
                    <label for="consent-process-details" class="ui-input-text" id="question-label-119" data-comment-block="true">Describe the consent process. Explain when and where consent will be obtained and how subjects and/or their legally authorized representatives will be provided sufficient opportunity (e.g., waiting period, if any) to consider participation.</label>
                    <div class="full-format text-output ui-input-search" name="consentProcessDetails" id="consent-process-details" data-comment-inline="true">Consent will be obtained immediately after recruitment and immediately before conducting the survey. As part of the recruitment process, the researcher will review the consent form with participants and make sure they understand what they are signing. The consent form itself will also include an overview that succinctly and clearly summarizes what they are consenting to (including an outline of the study and how results will be used). If parents of 16-17-year-olds are present, they will be asked to consent as well. However, the consent of a parent does not substitute for the consent of the young person. For the online survey, complete informed consent documentation (identical to that used in person) is the first page of the survey; participants must actively indicate that they consent to participate. For those who choose to participate in interviews, additional consent will be obtained at the time of the interview. For in-person interviews, this will be an additional written consent form. For those participating in online interviews, consent will be obtained via the same written consent form, but it will be delivered via email, signed, scanned, and returned electronically. </div>
                </fieldset>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Not Applicable</span></div>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format ui-required" name="minimizedInfluenceProcess" id="fieldset-minimized-influence-process">
                    <label for="minimized-influence-process" class="ui-input-text" id="question-label-120" data-comment-block="true">Explain how the possibility of coercion or undue influence will be minimized in the consent process.</label>
                    <div class="full-format text-output ui-input-search" name="minimizedInfluenceProcess" id="minimized-influence-process" data-comment-inline="true">Participation is entirely voluntary and participants are able to cease their involvement at any time. Coercion is extremely unlikely. Should the researcher perceive that an individual is being encouraged to participate when they are uncomfortable doing so (e.g., peer pressure), the researcher will gently reinforce the right of any participant to decline.</div>
                </fieldset>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Not Applicable</span></div>
            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasAdditionalTools" id="fieldset-has-additional-tools" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-121" data-comment-block="true">Will any other tools (e.g., quizzes, visual aids, information sheets) be used during the consent process to assist participant comprehension?</legend>
                    <div class="text-output ui-input-search" id="has-additional-tools" name="hasAdditionalTools" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden left ui-required full-format" name="consent-tools-files" id="fieldset-consent-tools-files">
                    <label class="ui-input-text" for="consent-tools-files" id="question-label-122" data-comment-block="true">Provide copies of these tools</label>
                    <div class="uploadifive-container text-output ui-input-search" id="consent-tools-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;consent-tools-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">

                    </div>
                </fieldset>
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasAdditionalForms" id="fieldset-has-additional-forms" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-123" data-comment-block="true">Will any other consent forms be used (e.g., for clinical procedures such as MRI, surgery, etc.)?</legend>
                    <div class="text-output ui-input-search" id="has-additional-forms" name="hasAdditionalForms" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="hidden left ui-required full-format" name="additional-consent-files" id="fieldset-additional-consent-files">
                    <label class="ui-input-text" for="additional-consent-files" id="question-label-124" data-comment-block="true">Provide copies of these forms</label>
                    <div class="uploadifive-container text-output ui-input-search" id="additional-consent-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;additional-consent-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">

                    </div>
                </fieldset>
            </div></div><div id="InformedConsentChanges" data-comment-section="Informed Consent Changes"><div data-role="content" class="content-instructions">
                <h2>Informed Consent Changes</h2>
                <p>The following consent or parental permission processes have additional pages included in the initial submission form and are listed on your study. Indicate if any changes are required to an additional page for this process.</p>

            </div><div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                <p>You cannot undo selections made on this page once your submission is under review.</p>
            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required left-full-format" data-theme="b" name="processChanges" id="fieldset-process-changes">
                    <legend class="ui-controlgroup-label" id="question-label-125" data-comment-block="true">Indicate the consent process(es) to be updated in this amendment.</legend>
                    <div class="text-output ui-input-search" id="process-changes" name="processChanges" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-checkbox ">&nbsp;■ <span class="-text">Informed Consent - Verbal Script/Online</span></div>
                        <div class="ui-checkbox ">&nbsp;□ <span class="-text">Waiver of Consent Documentation</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
            </div><div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                <p>You cannot undo selections made on this page once your submission is under review. Contact ORRP with questions.</p>
            </div><div class="hidden" id="deletion-message">
                <div class="ui-notice ui-notice-warning" data-role="content" data-theme="b">
                    <span class="ui-icon ui-icon-alert-yellow ui-icon-example">&nbsp;</span>
                    <p><strong>Caution!</strong> Unchecking a selection on this page will delete all saved information in your current submission. To continue, please confirm this choice below. Note: Information will not be lost if a new selection is added.</p>
                </div>
                <div class="ui-checkbox ">&nbsp;□ <span class="-text">Delete all saved information in my current submission and allow me to start over.</span></div>
            </div></div><div id="WaiverofConsentDocumentation" data-comment-section="Waiver of Consent Documentation"><div data-role="content" class="content-instructions">
                <h2>Waiver of Consent Documentation</h2>
                <p>Complete the questions below to request a waiver of consent documentation for the proposed research. DHHS regulations permit waivers of documentation of the consent process if the research meets certain conditions. DHHS and FDA regulations differ regarding when an IRB may waive the requirement to document the informed consent process.</p>
                <p>For additional guidance, see HRPP policy <a href="http://orrp.osu.edu/files/2011/10/Documentation-of-Informed-Consent.pdf" target="_blank" title="Documentation of the Informed Consent Process">Documentation of the Informed Consent Process</a> and the <a href="http://orrp.osu.edu/files/2011/11/IRBReviewerRefSheets.pdf" target="_blank" title="IRB Reviewer Reference Sheets &amp;emdash; Appendix 2">IRB Reviewer Reference Sheets - Appendix 2</a>.</p>

            </div><div data-role="content" class="content-group">
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasFdaRegulation" id="fieldset-has-fda-regulation" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-126" data-comment-block="true">Is this research subject to FDA regulations (e.g., involves use of a food, drug, biologic, device)?</legend>
                    <div class="text-output ui-input-search" id="has-fda-regulation" name="hasFdaRegulation" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasAdditionalRisk" id="fieldset-has-additional-risk" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-127" data-comment-block="true">Does the research (or research activities to which the waiver of documentation applies) present greater than minimal risk?</legend>
                    <div class="text-output ui-input-search" id="has-additional-risk" name="hasAdditionalRisk" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required full-format ui-controlgroup-horizontal" data-theme="b" name="hasCommonWrittenConsent" id="fieldset-has-common-written-consent" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-128" data-comment-block="true">Does the research involve procedures for which written consent is normally required outside the research context?</legend>
                    <div class="text-output ui-input-search" id="has-common-written-consent" name="hasCommonWrittenConsent" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;■ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required hidden full-format ui-controlgroup-horizontal" data-theme="b" name="hasOnlyConsentRecords" id="fieldset-has-only-consent-records" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-129" data-comment-block="true">Would the only record linking the participant and the research be the consent document?</legend>
                    <div class="text-output ui-input-search" id="has-only-consent-records" name="hasOnlyConsentRecords" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;□ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="ui-required hidden full-format ui-controlgroup-horizontal" data-theme="b" name="hasPotentialParticipantHarm" id="fieldset-has-potential-participant-harm" data-type="horizontal">
                    <legend class="ui-controlgroup-label" id="question-label-130" data-comment-block="true">Would the principal risk to the participant be potential harm resulting from a breach in confidentiality?</legend>
                    <div class="text-output ui-input-search" id="has-potential-participant-harm" name="hasPotentialParticipantHarm" data-theme="ui-body-b" data-comment-inline="true">
                        <div class="ui-radio ">&nbsp;□ <span class="-text">Yes</span></div>
                        <div class="ui-radio ">&nbsp;□ <span class="-text">No</span></div>
                    </div>
                    <p class="help-text"></p>
                </fieldset>
                <fieldset class="full-format ui-required" name="minimalRiskJustification" id="fieldset-minimal-risk-justification">
                    <label for="minimal-risk-justification" class="ui-input-text" id="question-label-131" data-comment-block="true">Explain how the research does not present greater than minimal risk and does not normally require written consent outside the research context.</label>
                    <div class="full-format text-output ui-input-search" name="minimalRiskJustification" id="minimal-risk-justification" data-comment-inline="true">The research is survey and interview based and addresses leisure activities. It poses no physical, economic, or legal risk to participants. Social and psychological risks are extremely unlikely and would result only from voluntary participant disclosures (see risk and harms section). Written consent will be acquired in all face-to-face encounters, and participants must indicate consent to participate in the online survey. For the additional consent to be interviewed, physical signatures may not be available for those interviewed via computer. In such cases, consent will be obtained by an emailed form.</div>
                </fieldset>
                <fieldset class="full-format ui-required hidden" name="dataRestrictionJustification" id="fieldset-data-restriction-justification">
                    <label for="data-restriction-justification" class="ui-input-text" id="question-label-132" data-comment-block="true">Explain how the data will be restricted so the only linking record is the consent document and also why the principal participant risk is a breach of confidentiality.</label>
                    <div class="full-format text-output ui-input-search" name="dataRestrictionJustification" id="data-restriction-justification" data-comment-inline="true"></div>
                </fieldset>
            </div><div id="section-consent-warning" class="hidden">
                <div class="ui-notice ui-notice-error" data-role="content" data-theme="c">
                    <span class="ui-icon ui-icon-alert-red ui-icon-example">&nbsp;</span>
                    <p>Based on the answers provided, the research does not qualify for a waiver of consent documentation. Either review the answers provided and correct or remove the request for a waiver of consent documentation. <a href="mailto:irbinfo@osu.edu">Contact ORRP</a> for more information.</p>
                </div>
            </div></div><div id="UploadedFilesReview" data-comment-section="Uploaded Files Review"><div data-role="content" class="content-instructions">
                <h2>Uploaded Files Review</h2>
                <p>Review all uploaded revised documents below. Additional documents may be loaded on the Other Files page.</p>
                <p>To access or upload a file, click on a page below.</p>
            </div><ul id="file-list-domestic-site-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Domestic Site Documentation</li>
                <li data-role="list-divider" role="heading">Wizarding World of Harry Potter, Orlando, FL - only participant observation will be conducted at this site. No recruitment, surveying, or interviewing of participants will happen on-site.</li>
                <li><i>No documents have been added to Wizarding World of Harry Potter, Orlando, FL - only participant observation will be conducted at this site. No recruitment, surveying, or interviewing of participants will happen on-site. for review.</i></li>
            </ul><ul id="file-list-international-site-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">International Site Documentation</li>
                <li data-role="list-divider" role="heading">Fan pilgrimage shrines - Ianto shrine, Roald Dahl Plass, Cardiff, UK; Sherlock shrine, St. Bartholomew's Hospital exterior, London, UK; Platform 9 3/4, King's Cross Station, London, UK; North Gower Street, London, UK (some research conducted on tours with Brit Movie Tours); also public locations adjacent to the Warner Bros. Studio Tour and the Doctor Who Experience</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507048">Swan_BritMovieTours_Correspondence.pdf<span class="ui-li-count">05/10/2017</span></a></li>
            </ul><ul id="file-list-protocol-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Research Protocol</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507044">Toy_IRB_protocol_021217.docx<span class="ui-li-count">02/12/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507053">Toy_IRB_protocol_CLEANCOPY_041218.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507054">Toy_IRB_protocol_TRACKCHANGES_041218.docx<span class="ui-li-count">05/13/2018</span></a></li>
            </ul><ul id="file-list-data-collection-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Data collection forms and/or other instruments</li>
                <li><i>No documents have been added for review.</i></li>
            </ul><ul id="file-list-subject-information-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Subject Information</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507049">Revised_InfoSheet_CleanCopy.docx<span class="ui-li-count">05/10/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507056">InfoSheetForWeb.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507057">Revised_InfoSheet_CLEANCOPY.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507058">Revised_InfoSheet_TRACKCHANGES.docx<span class="ui-li-count">05/13/2018</span></a></li>
            </ul><ul id="file-list-survey-questionnaire-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Surveys and/or questionnaires</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507043">Master Survey Template.docx<span class="ui-li-count">02/12/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507046">SampleInterviewQuestions.docx<span class="ui-li-count">04/01/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507063">Toy_SurveyTemplate_CLEANCOPY_051518.docx<span class="ui-li-count">05/16/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507064">Toy_SurveyTemplate_TRACKCHANGES_041618.docx<span class="ui-li-count">05/16/2018</span></a></li>
            </ul><ul id="file-list-recruitment-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Recruitment materials (e.g., ads, fliers, website postings, and letters)</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507047">Recruitment Script.docx<span class="ui-li-count">05/05/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507055">ParticipantRecruitment_Online.docx<span class="ui-li-count">05/13/2018</span></a></li>
            </ul><ul id="file-list-consent-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Consent Process</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507050">ICF FINAL_Parental Consent for Survey 6-8-2017 Clean.docx<span class="ui-li-count">06/08/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507051">ICF FINAL_Survey Informed Consent Clean.docx<span class="ui-li-count">06/08/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507052">ICF FINAL_Interview informed consent Clean.docx<span class="ui-li-count">06/08/2017</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507059">Revised_SurveyInformedConsentTRACKCHANGES_041818.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507060">Revised_InterviewInformedConsentTRACKCHANGES_041818.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507061">Revised_SurveyInformedConsentCLEANCOPY_041818.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507062">Revised_InterviewInformedConsentCLEANCOPY_041818.docx<span class="ui-li-count">05/13/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507068">Revised_SurveyInformedConsentTRACKCHANGES_052518.docx<span class="ui-li-count">05/25/2018</span></a></li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507069">Revised_SurveyInformedConsentCLEANCOPY_052518.docx<span class="ui-li-count">05/25/2018</span></a></li>
            </ul><ul id="file-list-other-files" data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true">
                <li data-theme="e" role="heading">Other Files</li>
                <li data-icon="download"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507070">ThereAndBackAgain_IRBrevisionsLetter_052518.docx<span class="ui-li-count">05/25/2018</span></a></li>
            </ul></div><div id="OtherFilesComments" data-comment-section="Other Files/Comments"><div data-role="content" class="content-instructions">
                <h2>Other Files/Comments</h2>
                <p>This page should be used to provide ORRP or the IRB with additional information related to the current submission.</p>
                <p>The general comments text area can be used to provide clarification to ORRP staff or the IRB members.</p>
                <p>The general upload box below should be used to upload any additional documents necessary for this submission that were not already captured previously in the form. Examples of documents which may be uploaded include the detailed cover letter response for modifications or deferrals, IRB approvals for external sites at the time of continuing review, or a memo to IRB reviewers from the investigator.</p>

            </div><div data-role="content" class="content-group">
                <fieldset class="full-format" name="other-files" id="fieldset-other-files">
                    <div class="uploadifive-container text-output ui-input-search" id="other-files" data-uploader-options="{&quot;fileTypes&quot;:false,&quot;auto&quot;:true,&quot;metadata&quot;:&quot;other-files&quot;,&quot;target&quot;:&quot;\/buck-irb\/file\/upload\/study\/33270&quot;,&quot;fileSizeLimit&quot;:&quot;20MB&quot;}" data-comment-inline="true">
                        <div class="ui-shadow-inset uploaded-files" title="Click a file to view contents">
                            <ul data-role="listview" data-theme="a" data-divider-theme="b" data-count-theme="d" data-inset="true" data-split-icon="delete-red">
                                <li data-role="list-divider" role="heading">Uploaded Files</li>
                                <li class="message"><i>IRB approved documents cannot be removed except by ORRP staff.</i></li>
                                <li data-icon="false" class="diff-none" id="file-upload-56" data-comment-block="true"><a href="https://orapps.osu.edu/buck-irb/file/download/study/33270/file/1507070" class="filename" target="_BLANK">ThereAndBackAgain_IRBrevisionsLetter_052518.docx</a>
                                    <p>Uploaded by Joanna Toy on 05/25/2018</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div><div data-role="content" class="content-group">
                <fieldset class="full-format" name="revisionComments" id="fieldset-revision-comments">
                    <label for="revision-comments" class="ui-input-text" id="question-label-133" data-comment-block="true">Additional comments for this submission.</label>
                    <div class="full-format text-output ui-input-search" name="revisionComments" id="revision-comments" data-comment-inline="true"></div>
                </fieldset>
            </div></div></div>
    </form>

</body></html>
`;

export { HTML };

