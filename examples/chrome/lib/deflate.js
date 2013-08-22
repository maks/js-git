<!DOCTYPE html>
<html class=" js no-flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths no-csspositionsticky filereader eventsource xhr2" style=""><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>zip.js/WebContent/deflate.js at master · gildas-lormeau/zip.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://github.com/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://github.com/apple-touch-icon-144.png">
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg">
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe17.rs.github.com">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.32) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="https://github.com/_sockets">
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    
    <meta content="collector.githubapp.com" name="octolytics-host"><meta content="github" name="octolytics-app-id"><meta content="71999" name="octolytics-actor-id"><meta content="maks" name="octolytics-actor-login"><meta content="0cc8d138b250d2ee9a9a1f422a89064e1cc6e3006788ac342a262e1850c1f665" name="octolytics-actor-hash">

    
    
    <link rel="icon" type="image/x-icon" href="https://github.com/favicon.ico">

    <meta content="authenticity_token" name="csrf-param">
<meta content="eKqF5g5xOK2NBP8SQr6Kn7NiWfH6v3iyD41cqR9p7fA=" name="csrf-token">

    <link href="deflate_files/github-000b49d741b30fe45589fa4960f17061c41e6662.css" media="all" rel="stylesheet" type="text/css">
    <link href="deflate_files/github2-b9852678c42b26293ff18b004f0459df4330f3da.css" media="all" rel="stylesheet" type="text/css">
    


      <script src="deflate_files/frameworks-8c90145ced3264909647872c925b3f983056d3d1.js" type="text/javascript"></script>
      <script src="deflate_files/github-87f1e83ee58d5acb53241ab43775bf403e0f7d15.js" type="text/javascript"></script><script src="deflate_files/ga.js" async="" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="8df38e35274ba41e916df33d79894270">

        <meta property="og:title" content="zip.js">
  <meta property="og:type" content="githubog:gitrepository">
  <meta property="og:url" content="https://github.com/gildas-lormeau/zip.js">
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png">
  <meta property="og:site_name" content="GitHub">
  <meta property="og:description" content="zip.js - JavaScript library to zip and unzip files">

  <meta name="description" content="zip.js - JavaScript library to zip and unzip files">

  <meta content="396787" name="octolytics-dimension-user_id"><meta content="gildas-lormeau" name="octolytics-dimension-user_login"><meta content="2207038" name="octolytics-dimension-repository_id"><meta content="gildas-lormeau/zip.js" name="octolytics-dimension-repository_nwo"><meta content="true" name="octolytics-dimension-repository_public"><meta content="false" name="octolytics-dimension-repository_is_fork"><meta content="2207038" name="octolytics-dimension-repository_network_root_id"><meta content="gildas-lormeau/zip.js" name="octolytics-dimension-repository_network_root_nwo">
  <link href="https://github.com/gildas-lormeau/zip.js/commits/master.atom" rel="alternate" title="Recent Commits to zip.js:master" type="application/atom+xml">

  <script src="deflate_files/api.js" async="" type="text/javascript"></script><meta data-pjax-transient="true" name="selected-link" value="repo_source"><link data-pjax-transient="true" rel="permalink" href="https://github.com/gildas-lormeau/zip.js/blob/4c93974e90e8bf9405bc72e139436325f2caf954/WebContent/deflate.js"></head>


  <body class="logged_in  linux vis-public env-production">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a original-title="You have unread notifications" href="https://github.com/notifications" class="notification-indicator tooltipped downwards">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off" data-username="maks" data-repo="gildas-lormeau/zip.js" data-branch="master" data-sha="ab7a025acc0d297a31cc1945f3eedcf5a7bf7875" type="text">

    <input name="nwo" value="gildas-lormeau/zip.js" type="hidden">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input class="js-search-this-repository" name="search_target" value="repository" checked="checked" type="radio">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input name="search_target" value="global" type="radio">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span original-title="Show command bar help" class="octicon help tooltipped downwards">
    <span class="octicon octicon-question"></span>
  </span>


  <input name="ref" value="cmdform" type="hidden">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com/">Gist</a></li>
            <li><a href="https://github.com/blog">Blog</a></li>
          <li><a href="https://help.github.com/">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="https://github.com/maks" class="name">
        <img src="deflate_files/322016982798ad35df085a1b7b729c38.png" height="20" width="20"> maks
      </a>
    </li>

      <li>
        <a original-title="Create a new repo" href="https://github.com/new" id="new_repo" class="tooltipped downwards" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a original-title="Account settings " href="https://github.com/settings/profile" id="account_settings" class="tooltipped downwards" aria-label="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a original-title="Sign out" class="tooltipped downwards" href="https://github.com/logout" data-method="post" id="logout" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="https://github.com/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="https://github.com/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="gildas-lormeau/zip.js">This repository</span>
    </li>
    <li>
      <a href="https://github.com/gildas-lormeau/zip.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope="" itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" value="eKqF5g5xOK2NBP8SQr6Kn7NiWfH6v3iyD41cqR9p7fA=" type="hidden"></div>  <input id="repository_id" name="repository_id" value="2207038" type="hidden">

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="https://github.com/gildas-lormeau/zip.js/watchers">
          47
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" value="included" type="radio">
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" value="subscribed" type="radio">
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" value="ignore" type="radio">
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="https://github.com/gildas-lormeau/zip.js/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="https://github.com/gildas-lormeau/zip.js/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="https://github.com/gildas-lormeau/zip.js/stargazers">787</a>
</div>

  </li>


        <li>
          <a href="https://github.com/gildas-lormeau/zip.js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="https://github.com/gildas-lormeau/zip.js/network" class="social-count">88</a>
        </li>


</ul>

        <h1 itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="https://github.com/gildas-lormeau" class="url fn" itemprop="url" rel="author"><span itemprop="title">gildas-lormeau</span></a></span><span class="repohead-name-divider">/</span><strong><a href="https://github.com/gildas-lormeau/zip.js" class="js-current-repository js-repo-home-link">zip.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li original-title="Code" class="tooltipped leftwards">
        <a href="https://github.com/gildas-lormeau/zip.js" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /gildas-lormeau/zip.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>      </li>

        <li original-title="Issues" class="tooltipped leftwards">
          <a href="https://github.com/gildas-lormeau/zip.js/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /gildas-lormeau/zip.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="counter">27</span>
            <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>        </li>

      <li original-title="Pull Requests" class="tooltipped leftwards"><a href="https://github.com/gildas-lormeau/zip.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /gildas-lormeau/zip.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="counter">5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>      </li>


        <li original-title="Wiki" class="tooltipped leftwards">
          <a href="https://github.com/gildas-lormeau/zip.js/wiki" aria-label="Wiki" class="js-selected-navigation-item" data-pjax="true" data-selected-links="repo_wiki /gildas-lormeau/zip.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li original-title="Pulse" class="tooltipped leftwards">
        <a href="https://github.com/gildas-lormeau/zip.js/pulse" aria-label="Pulse" class="js-selected-navigation-item" data-pjax="true" data-selected-links="pulse /gildas-lormeau/zip.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>      </li>

      <li original-title="Graphs" class="tooltipped leftwards">
        <a href="https://github.com/gildas-lormeau/zip.js/graphs" aria-label="Graphs" class="js-selected-navigation-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /gildas-lormeau/zip.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>      </li>

      <li original-title="Network" class="tooltipped leftwards">
        <a href="https://github.com/gildas-lormeau/zip.js/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /gildas-lormeau/zip.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" src="deflate_files/octocat-spinner-32.gif" height="16" width="16">
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open" data-protocol-type="http" data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input class="clone js-url-field" value="https://github.com/gildas-lormeau/zip.js.git" readonly="readonly" type="text">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/gildas-lormeau/zip.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url " data-protocol-type="ssh" data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input class="clone js-url-field" value="git@github.com:gildas-lormeau/zip.js.git" readonly="readonly" type="text">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:gildas-lormeau/zip.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url " data-protocol-type="subversion" data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input class="clone js-url-field" value="https://github.com/gildas-lormeau/zip.js" readonly="readonly" type="text">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/gildas-lormeau/zip.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="https://github.com/gildas-lormeau/zip.js/archive/master.zip" class="minibutton sidebar-button" title="Download this repository as a zip file" rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container="">
  


<!-- blob contrib key: blob_contributors:v21:b4df4550065c2565c7b34c61ec13b6be -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:b4df4550065c2565c7b34c61ec13b6be -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="https://github.com/gildas-lormeau/zip.js/find/master" data-pjax="" data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu">
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-master-branch="master" data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags" type="text">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/gildas-lormeau/zip.js/blob/gh-pages/WebContent/deflate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" data-skip-pjax="true" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/gildas-lormeau/zip.js/blob/master/WebContent/deflate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/gildas-lormeau/zip.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">zip.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/gildas-lormeau/zip.js/tree/master/WebContent" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">WebContent</span></a></span><span class="separator"> / </span><strong class="final-path">deflate.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="WebContent/deflate.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" src="deflate_files/8a0785b0f66526b170e1981cb731f606.png" height="24" width="24">
    <span class="author"><a href="https://github.com/gildas-lormeau" rel="author">gildas-lormeau</a></span>
    <time class="js-relative-date" datetime="2013-03-16T17:50:50-07:00" title="2013-03-16 17:50:50">5 months ago</time>
    <div class="commit-title">
        <a href="https://github.com/gildas-lormeau/zip.js/commit/9cbeaeccc2194e6297fa13997ec203883c4f59c1" class="message" data-pjax="true" title="fixed zip-fs.js (zip-ext.js is now optional)">fixed zip-fs.js (zip-ext.js is now optional)</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img src="deflate_files/8a0785b0f66526b170e1981cb731f606.png" height="24" width="24">
          <a href="https://github.com/gildas-lormeau">gildas-lormeau</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>2089 lines (1763 sloc)</span>
        <span>70.624 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a original-title="Clicking this button will automatically fork this project so you can edit the file" class="minibutton tooltipped leftwards" href="https://github.com/gildas-lormeau/zip.js/edit/master/WebContent/deflate.js" data-method="post" rel="nofollow">Edit</a>
          <a href="https://github.com/gildas-lormeau/zip.js/raw/master/WebContent/deflate.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="https://github.com/gildas-lormeau/zip.js/blame/master/WebContent/deflate.js" class="button minibutton ">Blame</a>
          <a href="https://github.com/gildas-lormeau/zip.js/commits/master/WebContent/deflate.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a original-title="Fork this project and delete file" class="minibutton danger empty-icon tooltipped downwards" href="https://github.com/gildas-lormeau/zip.js/delete/master/WebContent/deflate.js" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tbody><tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>
<span id="L1981" rel="#L1981">1981</span>
<span id="L1982" rel="#L1982">1982</span>
<span id="L1983" rel="#L1983">1983</span>
<span id="L1984" rel="#L1984">1984</span>
<span id="L1985" rel="#L1985">1985</span>
<span id="L1986" rel="#L1986">1986</span>
<span id="L1987" rel="#L1987">1987</span>
<span id="L1988" rel="#L1988">1988</span>
<span id="L1989" rel="#L1989">1989</span>
<span id="L1990" rel="#L1990">1990</span>
<span id="L1991" rel="#L1991">1991</span>
<span id="L1992" rel="#L1992">1992</span>
<span id="L1993" rel="#L1993">1993</span>
<span id="L1994" rel="#L1994">1994</span>
<span id="L1995" rel="#L1995">1995</span>
<span id="L1996" rel="#L1996">1996</span>
<span id="L1997" rel="#L1997">1997</span>
<span id="L1998" rel="#L1998">1998</span>
<span id="L1999" rel="#L1999">1999</span>
<span id="L2000" rel="#L2000">2000</span>
<span id="L2001" rel="#L2001">2001</span>
<span id="L2002" rel="#L2002">2002</span>
<span id="L2003" rel="#L2003">2003</span>
<span id="L2004" rel="#L2004">2004</span>
<span id="L2005" rel="#L2005">2005</span>
<span id="L2006" rel="#L2006">2006</span>
<span id="L2007" rel="#L2007">2007</span>
<span id="L2008" rel="#L2008">2008</span>
<span id="L2009" rel="#L2009">2009</span>
<span id="L2010" rel="#L2010">2010</span>
<span id="L2011" rel="#L2011">2011</span>
<span id="L2012" rel="#L2012">2012</span>
<span id="L2013" rel="#L2013">2013</span>
<span id="L2014" rel="#L2014">2014</span>
<span id="L2015" rel="#L2015">2015</span>
<span id="L2016" rel="#L2016">2016</span>
<span id="L2017" rel="#L2017">2017</span>
<span id="L2018" rel="#L2018">2018</span>
<span id="L2019" rel="#L2019">2019</span>
<span id="L2020" rel="#L2020">2020</span>
<span id="L2021" rel="#L2021">2021</span>
<span id="L2022" rel="#L2022">2022</span>
<span id="L2023" rel="#L2023">2023</span>
<span id="L2024" rel="#L2024">2024</span>
<span id="L2025" rel="#L2025">2025</span>
<span id="L2026" rel="#L2026">2026</span>
<span id="L2027" rel="#L2027">2027</span>
<span id="L2028" rel="#L2028">2028</span>
<span id="L2029" rel="#L2029">2029</span>
<span id="L2030" rel="#L2030">2030</span>
<span id="L2031" rel="#L2031">2031</span>
<span id="L2032" rel="#L2032">2032</span>
<span id="L2033" rel="#L2033">2033</span>
<span id="L2034" rel="#L2034">2034</span>
<span id="L2035" rel="#L2035">2035</span>
<span id="L2036" rel="#L2036">2036</span>
<span id="L2037" rel="#L2037">2037</span>
<span id="L2038" rel="#L2038">2038</span>
<span id="L2039" rel="#L2039">2039</span>
<span id="L2040" rel="#L2040">2040</span>
<span id="L2041" rel="#L2041">2041</span>
<span id="L2042" rel="#L2042">2042</span>
<span id="L2043" rel="#L2043">2043</span>
<span id="L2044" rel="#L2044">2044</span>
<span id="L2045" rel="#L2045">2045</span>
<span id="L2046" rel="#L2046">2046</span>
<span id="L2047" rel="#L2047">2047</span>
<span id="L2048" rel="#L2048">2048</span>
<span id="L2049" rel="#L2049">2049</span>
<span id="L2050" rel="#L2050">2050</span>
<span id="L2051" rel="#L2051">2051</span>
<span id="L2052" rel="#L2052">2052</span>
<span id="L2053" rel="#L2053">2053</span>
<span id="L2054" rel="#L2054">2054</span>
<span id="L2055" rel="#L2055">2055</span>
<span id="L2056" rel="#L2056">2056</span>
<span id="L2057" rel="#L2057">2057</span>
<span id="L2058" rel="#L2058">2058</span>
<span id="L2059" rel="#L2059">2059</span>
<span id="L2060" rel="#L2060">2060</span>
<span id="L2061" rel="#L2061">2061</span>
<span id="L2062" rel="#L2062">2062</span>
<span id="L2063" rel="#L2063">2063</span>
<span id="L2064" rel="#L2064">2064</span>
<span id="L2065" rel="#L2065">2065</span>
<span id="L2066" rel="#L2066">2066</span>
<span id="L2067" rel="#L2067">2067</span>
<span id="L2068" rel="#L2068">2068</span>
<span id="L2069" rel="#L2069">2069</span>
<span id="L2070" rel="#L2070">2070</span>
<span id="L2071" rel="#L2071">2071</span>
<span id="L2072" rel="#L2072">2072</span>
<span id="L2073" rel="#L2073">2073</span>
<span id="L2074" rel="#L2074">2074</span>
<span id="L2075" rel="#L2075">2075</span>
<span id="L2076" rel="#L2076">2076</span>
<span id="L2077" rel="#L2077">2077</span>
<span id="L2078" rel="#L2078">2078</span>
<span id="L2079" rel="#L2079">2079</span>
<span id="L2080" rel="#L2080">2080</span>
<span id="L2081" rel="#L2081">2081</span>
<span id="L2082" rel="#L2082">2082</span>
<span id="L2083" rel="#L2083">2083</span>
<span id="L2084" rel="#L2084">2084</span>
<span id="L2085" rel="#L2085">2085</span>
<span id="L2086" rel="#L2086">2086</span>
<span id="L2087" rel="#L2087">2087</span>
<span id="L2088" rel="#L2088">2088</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class="line" id="LC1"><span class="cm">/*</span></div><div class="line" id="LC2"><span class="cm"> Copyright (c) 2013 Gildas Lormeau. All rights reserved.</span></div><div class="line" id="LC3"><br></div><div class="line" id="LC4"><span class="cm"> Redistribution and use in source and binary forms, with or without</span></div><div class="line" id="LC5"><span class="cm"> modification, are permitted provided that the following conditions are met:</span></div><div class="line" id="LC6"><br></div><div class="line" id="LC7"><span class="cm"> 1. Redistributions of source code must retain the above copyright notice,</span></div><div class="line" id="LC8"><span class="cm"> this list of conditions and the following disclaimer.</span></div><div class="line" id="LC9"><br></div><div class="line" id="LC10"><span class="cm"> 2. Redistributions in binary form must reproduce the above copyright </span></div><div class="line" id="LC11"><span class="cm"> notice, this list of conditions and the following disclaimer in </span></div><div class="line" id="LC12"><span class="cm"> the documentation and/or other materials provided with the distribution.</span></div><div class="line" id="LC13"><br></div><div class="line" id="LC14"><span class="cm"> 3. The names of the authors may not be used to endorse or promote products</span></div><div class="line" id="LC15"><span class="cm"> derived from this software without specific prior written permission.</span></div><div class="line" id="LC16"><br></div><div class="line" id="LC17"><span class="cm"> THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,</span></div><div class="line" id="LC18"><span class="cm"> INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND</span></div><div class="line" id="LC19"><span class="cm"> FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,</span></div><div class="line" id="LC20"><span class="cm"> INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,</span></div><div class="line" id="LC21"><span class="cm"> INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT</span></div><div class="line" id="LC22"><span class="cm"> LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,</span></div><div class="line" id="LC23"><span class="cm"> OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF</span></div><div class="line" id="LC24"><span class="cm"> LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING</span></div><div class="line" id="LC25"><span class="cm"> NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,</span></div><div class="line" id="LC26"><span class="cm"> EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div><div class="line" id="LC27"><span class="cm"> */</span></div><div class="line" id="LC28"><br></div><div class="line" id="LC29"><span class="cm">/*</span></div><div class="line" id="LC30"><span class="cm"> * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.</span></div><div class="line" id="LC31"><span class="cm"> * JZlib is based on zlib-1.1.3, so all credit should go authors</span></div><div class="line" id="LC32"><span class="cm"> * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)</span></div><div class="line" id="LC33"><span class="cm"> * and contributors of zlib.</span></div><div class="line" id="LC34"><span class="cm"> */</span></div><div class="line" id="LC35"><br></div><div class="line" id="LC36"><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC37"><br></div><div class="line" id="LC38">	<span class="c1">// Global</span></div><div class="line" id="LC39"><br></div><div class="line" id="LC40">	<span class="kd">var</span> <span class="nx">MAX_BITS</span> <span class="o">=</span> <span class="mi">15</span><span class="p">;</span></div><div class="line" id="LC41">	<span class="kd">var</span> <span class="nx">D_CODES</span> <span class="o">=</span> <span class="mi">30</span><span class="p">;</span></div><div class="line" id="LC42">	<span class="kd">var</span> <span class="nx">BL_CODES</span> <span class="o">=</span> <span class="mi">19</span><span class="p">;</span></div><div class="line" id="LC43"><br></div><div class="line" id="LC44">	<span class="kd">var</span> <span class="nx">LENGTH_CODES</span> <span class="o">=</span> <span class="mi">29</span><span class="p">;</span></div><div class="line" id="LC45">	<span class="kd">var</span> <span class="nx">LITERALS</span> <span class="o">=</span> <span class="mi">256</span><span class="p">;</span></div><div class="line" id="LC46">	<span class="kd">var</span> <span class="nx">L_CODES</span> <span class="o">=</span> <span class="p">(</span><span class="nx">LITERALS</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">+</span> <span class="nx">LENGTH_CODES</span><span class="p">);</span></div><div class="line" id="LC47">	<span class="kd">var</span> <span class="nx">HEAP_SIZE</span> <span class="o">=</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">L_CODES</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC48"><br></div><div class="line" id="LC49">	<span class="kd">var</span> <span class="nx">END_BLOCK</span> <span class="o">=</span> <span class="mi">256</span><span class="p">;</span></div><div class="line" id="LC50"><br></div><div class="line" id="LC51">	<span class="c1">// Bit length codes must not exceed MAX_BL_BITS bits</span></div><div class="line" id="LC52">	<span class="kd">var</span> <span class="nx">MAX_BL_BITS</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span></div><div class="line" id="LC53"><br></div><div class="line" id="LC54">	<span class="c1">// repeat previous bit length 3-6 times (2 bits of repeat count)</span></div><div class="line" id="LC55">	<span class="kd">var</span> <span class="nx">REP_3_6</span> <span class="o">=</span> <span class="mi">16</span><span class="p">;</span></div><div class="line" id="LC56"><br></div><div class="line" id="LC57">	<span class="c1">// repeat a zero length 3-10 times (3 bits of repeat count)</span></div><div class="line" id="LC58">	<span class="kd">var</span> <span class="nx">REPZ_3_10</span> <span class="o">=</span> <span class="mi">17</span><span class="p">;</span></div><div class="line" id="LC59"><br></div><div class="line" id="LC60">	<span class="c1">// repeat a zero length 11-138 times (7 bits of repeat count)</span></div><div class="line" id="LC61">	<span class="kd">var</span> <span class="nx">REPZ_11_138</span> <span class="o">=</span> <span class="mi">18</span><span class="p">;</span></div><div class="line" id="LC62"><br></div><div class="line" id="LC63">	<span class="c1">// The lengths of the bit length codes are sent in order of decreasing</span></div><div class="line" id="LC64">	<span class="c1">// probability, to avoid transmitting the lengths for unused bit</span></div><div class="line" id="LC65">	<span class="c1">// length codes.</span></div><div class="line" id="LC66"><br></div><div class="line" id="LC67">	<span class="kd">var</span> <span class="nx">Buf_size</span> <span class="o">=</span> <span class="mi">8</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC68"><br></div><div class="line" id="LC69">	<span class="c1">// JZlib version : "1.0.2"</span></div><div class="line" id="LC70">	<span class="kd">var</span> <span class="nx">Z_DEFAULT_COMPRESSION</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC71"><br></div><div class="line" id="LC72">	<span class="c1">// compression strategy</span></div><div class="line" id="LC73">	<span class="kd">var</span> <span class="nx">Z_FILTERED</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC74">	<span class="kd">var</span> <span class="nx">Z_HUFFMAN_ONLY</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC75">	<span class="kd">var</span> <span class="nx">Z_DEFAULT_STRATEGY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC76"><br></div><div class="line" id="LC77">	<span class="kd">var</span> <span class="nx">Z_NO_FLUSH</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC78">	<span class="kd">var</span> <span class="nx">Z_PARTIAL_FLUSH</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC79">	<span class="kd">var</span> <span class="nx">Z_FULL_FLUSH</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC80">	<span class="kd">var</span> <span class="nx">Z_FINISH</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span></div><div class="line" id="LC81"><br></div><div class="line" id="LC82">	<span class="kd">var</span> <span class="nx">Z_OK</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC83">	<span class="kd">var</span> <span class="nx">Z_STREAM_END</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC84">	<span class="kd">var</span> <span class="nx">Z_NEED_DICT</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC85">	<span class="kd">var</span> <span class="nx">Z_STREAM_ERROR</span> <span class="o">=</span> <span class="o">-</span><span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC86">	<span class="kd">var</span> <span class="nx">Z_DATA_ERROR</span> <span class="o">=</span> <span class="o">-</span><span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC87">	<span class="kd">var</span> <span class="nx">Z_BUF_ERROR</span> <span class="o">=</span> <span class="o">-</span><span class="mi">5</span><span class="p">;</span></div><div class="line" id="LC88"><br></div><div class="line" id="LC89">	<span class="c1">// Tree</span></div><div class="line" id="LC90"><br></div><div class="line" id="LC91">	<span class="c1">// see definition of array dist_code below</span></div><div class="line" id="LC92">	<span class="kd">var</span> <span class="nx">_dist_code</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span></div><div class="line" id="LC93">			<span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span></div><div class="line" id="LC94">			<span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span></div><div class="line" id="LC95">			<span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span></div><div class="line" id="LC96">			<span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span></div><div class="line" id="LC97">			<span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span></div><div class="line" id="LC98">			<span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span></div><div class="line" id="LC99">			<span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span></div><div class="line" id="LC100">			<span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span></div><div class="line" id="LC101">			<span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span></div><div class="line" id="LC102">			<span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span></div><div class="line" id="LC103">			<span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span></div><div class="line" id="LC104">			<span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span></div><div class="line" id="LC105">			<span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">29</span> <span class="p">];</span></div><div class="line" id="LC106"><br></div><div class="line" id="LC107">	<span class="kd">function</span> <span class="nx">Tree</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC108">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC109"><br></div><div class="line" id="LC110">		<span class="c1">// dyn_tree; // the dynamic tree</span></div><div class="line" id="LC111">		<span class="c1">// max_code; // largest code with non zero frequency</span></div><div class="line" id="LC112">		<span class="c1">// stat_desc; // the corresponding static tree</span></div><div class="line" id="LC113"><br></div><div class="line" id="LC114">		<span class="c1">// Compute the optimal bit lengths for a tree and update the total bit</span></div><div class="line" id="LC115">		<span class="c1">// length</span></div><div class="line" id="LC116">		<span class="c1">// for the current block.</span></div><div class="line" id="LC117">		<span class="c1">// IN assertion: the fields freq and dad are set, heap[heap_max] and</span></div><div class="line" id="LC118">		<span class="c1">// above are the tree nodes sorted by increasing frequency.</span></div><div class="line" id="LC119">		<span class="c1">// OUT assertions: the field len is set to the optimal bit length, the</span></div><div class="line" id="LC120">		<span class="c1">// array bl_count contains the frequencies for each bit length.</span></div><div class="line" id="LC121">		<span class="c1">// The length opt_len is updated; static_len is also updated if stree is</span></div><div class="line" id="LC122">		<span class="c1">// not null.</span></div><div class="line" id="LC123">		<span class="kd">function</span> <span class="nx">gen_bitlen</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC124">			<span class="kd">var</span> <span class="nx">tree</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dyn_tree</span><span class="p">;</span></div><div class="line" id="LC125">			<span class="kd">var</span> <span class="nx">stree</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">static_tree</span><span class="p">;</span></div><div class="line" id="LC126">			<span class="kd">var</span> <span class="nx">extra</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">extra_bits</span><span class="p">;</span></div><div class="line" id="LC127">			<span class="kd">var</span> <span class="nx">base</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">extra_base</span><span class="p">;</span></div><div class="line" id="LC128">			<span class="kd">var</span> <span class="nx">max_length</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">max_length</span><span class="p">;</span></div><div class="line" id="LC129">			<span class="kd">var</span> <span class="nx">h</span><span class="p">;</span> <span class="c1">// heap index</span></div><div class="line" id="LC130">			<span class="kd">var</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">m</span><span class="p">;</span> <span class="c1">// iterate over the tree elements</span></div><div class="line" id="LC131">			<span class="kd">var</span> <span class="nx">bits</span><span class="p">;</span> <span class="c1">// bit length</span></div><div class="line" id="LC132">			<span class="kd">var</span> <span class="nx">xbits</span><span class="p">;</span> <span class="c1">// extra bits</span></div><div class="line" id="LC133">			<span class="kd">var</span> <span class="nx">f</span><span class="p">;</span> <span class="c1">// frequency</span></div><div class="line" id="LC134">			<span class="kd">var</span> <span class="nx">overflow</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// number of elements with bit length too large</span></div><div class="line" id="LC135"><br></div><div class="line" id="LC136">			<span class="k">for</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bits</span> <span class="o">&lt;=</span> <span class="nx">MAX_BITS</span><span class="p">;</span> <span class="nx">bits</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC137">				<span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC138"><br></div><div class="line" id="LC139">			<span class="c1">// In a first pass, compute the optimal bit lengths (which may</span></div><div class="line" id="LC140">			<span class="c1">// overflow in the case of the bit length tree).</span></div><div class="line" id="LC141">			<span class="nx">tree</span><span class="p">[</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// root of the heap</span></div><div class="line" id="LC142"><br></div><div class="line" id="LC143">			<span class="k">for</span> <span class="p">(</span><span class="nx">h</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">h</span> <span class="o">&lt;</span> <span class="nx">HEAP_SIZE</span><span class="p">;</span> <span class="nx">h</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC144">				<span class="nx">n</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span></div><div class="line" id="LC145">				<span class="nx">bits</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC146">				<span class="k">if</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">&gt;</span> <span class="nx">max_length</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC147">					<span class="nx">bits</span> <span class="o">=</span> <span class="nx">max_length</span><span class="p">;</span></div><div class="line" id="LC148">					<span class="nx">overflow</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC149">				<span class="p">}</span></div><div class="line" id="LC150">				<span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bits</span><span class="p">;</span></div><div class="line" id="LC151">				<span class="c1">// We overwrite tree[n*2+1] which is no longer needed</span></div><div class="line" id="LC152"><br></div><div class="line" id="LC153">				<span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">&gt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">max_code</span><span class="p">)</span></div><div class="line" id="LC154">					<span class="k">continue</span><span class="p">;</span> <span class="c1">// not a leaf node</span></div><div class="line" id="LC155"><br></div><div class="line" id="LC156">				<span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC157">				<span class="nx">xbits</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC158">				<span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">&gt;=</span> <span class="nx">base</span><span class="p">)</span></div><div class="line" id="LC159">					<span class="nx">xbits</span> <span class="o">=</span> <span class="nx">extra</span><span class="p">[</span><span class="nx">n</span> <span class="o">-</span> <span class="nx">base</span><span class="p">];</span></div><div class="line" id="LC160">				<span class="nx">f</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span><span class="p">];</span></div><div class="line" id="LC161">				<span class="nx">s</span><span class="p">.</span><span class="nx">opt_len</span> <span class="o">+=</span> <span class="nx">f</span> <span class="o">*</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">+</span> <span class="nx">xbits</span><span class="p">);</span></div><div class="line" id="LC162">				<span class="k">if</span> <span class="p">(</span><span class="nx">stree</span><span class="p">)</span></div><div class="line" id="LC163">					<span class="nx">s</span><span class="p">.</span><span class="nx">static_len</span> <span class="o">+=</span> <span class="nx">f</span> <span class="o">*</span> <span class="p">(</span><span class="nx">stree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">xbits</span><span class="p">);</span></div><div class="line" id="LC164">			<span class="p">}</span></div><div class="line" id="LC165">			<span class="k">if</span> <span class="p">(</span><span class="nx">overflow</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC166">				<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC167"><br></div><div class="line" id="LC168">			<span class="c1">// This happens for example on obj2 and pic of the Calgary corpus</span></div><div class="line" id="LC169">			<span class="c1">// Find the first bit length which could increase:</span></div><div class="line" id="LC170">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC171">				<span class="nx">bits</span> <span class="o">=</span> <span class="nx">max_length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC172">				<span class="k">while</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span><span class="p">]</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC173">					<span class="nx">bits</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC174">				<span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span><span class="p">]</span><span class="o">--</span><span class="p">;</span> <span class="c1">// move one leaf down the tree</span></div><div class="line" id="LC175">				<span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">// move one overflow item as its brother</span></div><div class="line" id="LC176">				<span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">max_length</span><span class="p">]</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC177">				<span class="c1">// The brother of the overflow item also moves one step up,</span></div><div class="line" id="LC178">				<span class="c1">// but this does not affect bl_count[max_length]</span></div><div class="line" id="LC179">				<span class="nx">overflow</span> <span class="o">-=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC180">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">overflow</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC181"><br></div><div class="line" id="LC182">			<span class="k">for</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">=</span> <span class="nx">max_length</span><span class="p">;</span> <span class="nx">bits</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bits</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC183">				<span class="nx">n</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span><span class="p">];</span></div><div class="line" id="LC184">				<span class="k">while</span> <span class="p">(</span><span class="nx">n</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC185">					<span class="nx">m</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">--</span><span class="nx">h</span><span class="p">];</span></div><div class="line" id="LC186">					<span class="k">if</span> <span class="p">(</span><span class="nx">m</span> <span class="o">&gt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">max_code</span><span class="p">)</span></div><div class="line" id="LC187">						<span class="k">continue</span><span class="p">;</span></div><div class="line" id="LC188">					<span class="k">if</span> <span class="p">(</span><span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">bits</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC189">						<span class="nx">s</span><span class="p">.</span><span class="nx">opt_len</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">-</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">])</span> <span class="o">*</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span><span class="p">];</span></div><div class="line" id="LC190">						<span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bits</span><span class="p">;</span></div><div class="line" id="LC191">					<span class="p">}</span></div><div class="line" id="LC192">					<span class="nx">n</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC193">				<span class="p">}</span></div><div class="line" id="LC194">			<span class="p">}</span></div><div class="line" id="LC195">		<span class="p">}</span></div><div class="line" id="LC196"><br></div><div class="line" id="LC197">		<span class="c1">// Reverse the first len bits of a code, using straightforward code (a</span></div><div class="line" id="LC198">		<span class="c1">// faster</span></div><div class="line" id="LC199">		<span class="c1">// method would use a table)</span></div><div class="line" id="LC200">		<span class="c1">// IN assertion: 1 &lt;= len &lt;= 15</span></div><div class="line" id="LC201">		<span class="kd">function</span> <span class="nx">bi_reverse</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="c1">// the value to invert</span></div><div class="line" id="LC202">		<span class="nx">len</span> <span class="c1">// its bit length</span></div><div class="line" id="LC203">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC204">			<span class="kd">var</span> <span class="nx">res</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC205">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC206">				<span class="nx">res</span> <span class="o">|=</span> <span class="nx">code</span> <span class="o">&amp;</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC207">				<span class="nx">code</span> <span class="o">&gt;&gt;&gt;=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC208">				<span class="nx">res</span> <span class="o">&lt;&lt;=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC209">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC210">			<span class="k">return</span> <span class="nx">res</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC211">		<span class="p">}</span></div><div class="line" id="LC212"><br></div><div class="line" id="LC213">		<span class="c1">// Generate the codes for a given tree and bit counts (which need not be</span></div><div class="line" id="LC214">		<span class="c1">// optimal).</span></div><div class="line" id="LC215">		<span class="c1">// IN assertion: the array bl_count contains the bit length statistics for</span></div><div class="line" id="LC216">		<span class="c1">// the given tree and the field len is set for all tree elements.</span></div><div class="line" id="LC217">		<span class="c1">// OUT assertion: the field code is set for all tree elements of non</span></div><div class="line" id="LC218">		<span class="c1">// zero code length.</span></div><div class="line" id="LC219">		<span class="kd">function</span> <span class="nx">gen_codes</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="c1">// the tree to decorate</span></div><div class="line" id="LC220">		<span class="nx">max_code</span><span class="p">,</span> <span class="c1">// largest code with non zero frequency</span></div><div class="line" id="LC221">		<span class="nx">bl_count</span> <span class="c1">// number of codes at each bit length</span></div><div class="line" id="LC222">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC223">			<span class="kd">var</span> <span class="nx">next_code</span> <span class="o">=</span> <span class="p">[];</span> <span class="c1">// next code value for each</span></div><div class="line" id="LC224">			<span class="c1">// bit length</span></div><div class="line" id="LC225">			<span class="kd">var</span> <span class="nx">code</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// running code value</span></div><div class="line" id="LC226">			<span class="kd">var</span> <span class="nx">bits</span><span class="p">;</span> <span class="c1">// bit index</span></div><div class="line" id="LC227">			<span class="kd">var</span> <span class="nx">n</span><span class="p">;</span> <span class="c1">// code index</span></div><div class="line" id="LC228">			<span class="kd">var</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC229"><br></div><div class="line" id="LC230">			<span class="c1">// The distribution counts are first used to generate the code values</span></div><div class="line" id="LC231">			<span class="c1">// without bit reversal.</span></div><div class="line" id="LC232">			<span class="k">for</span> <span class="p">(</span><span class="nx">bits</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">bits</span> <span class="o">&lt;=</span> <span class="nx">MAX_BITS</span><span class="p">;</span> <span class="nx">bits</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC233">				<span class="nx">next_code</span><span class="p">[</span><span class="nx">bits</span><span class="p">]</span> <span class="o">=</span> <span class="nx">code</span> <span class="o">=</span> <span class="p">((</span><span class="nx">code</span> <span class="o">+</span> <span class="nx">bl_count</span><span class="p">[</span><span class="nx">bits</span> <span class="o">-</span> <span class="mi">1</span><span class="p">])</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC234">			<span class="p">}</span></div><div class="line" id="LC235"><br></div><div class="line" id="LC236">			<span class="c1">// Check that the bit counts in bl_count are consistent. The last code</span></div><div class="line" id="LC237">			<span class="c1">// must be all ones.</span></div><div class="line" id="LC238">			<span class="c1">// Assert (code + bl_count[MAX_BITS]-1 == (1&lt;&lt;MAX_BITS)-1,</span></div><div class="line" id="LC239">			<span class="c1">// "inconsistent bit counts");</span></div><div class="line" id="LC240">			<span class="c1">// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));</span></div><div class="line" id="LC241"><br></div><div class="line" id="LC242">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;=</span> <span class="nx">max_code</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC243">				<span class="nx">len</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC244">				<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC245">					<span class="k">continue</span><span class="p">;</span></div><div class="line" id="LC246">				<span class="c1">// Now reverse the bits</span></div><div class="line" id="LC247">				<span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bi_reverse</span><span class="p">(</span><span class="nx">next_code</span><span class="p">[</span><span class="nx">len</span><span class="p">]</span><span class="o">++</span><span class="p">,</span> <span class="nx">len</span><span class="p">);</span></div><div class="line" id="LC248">			<span class="p">}</span></div><div class="line" id="LC249">		<span class="p">}</span></div><div class="line" id="LC250"><br></div><div class="line" id="LC251">		<span class="c1">// Construct one Huffman tree and assigns the code bit strings and lengths.</span></div><div class="line" id="LC252">		<span class="c1">// Update the total bit length for the current block.</span></div><div class="line" id="LC253">		<span class="c1">// IN assertion: the field freq is set for all tree elements.</span></div><div class="line" id="LC254">		<span class="c1">// OUT assertions: the fields len and code are set to the optimal bit length</span></div><div class="line" id="LC255">		<span class="c1">// and corresponding code. The length opt_len is updated; static_len is</span></div><div class="line" id="LC256">		<span class="c1">// also updated if stree is not null. The field max_code is set.</span></div><div class="line" id="LC257">		<span class="nx">that</span><span class="p">.</span><span class="nx">build_tree</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC258">			<span class="kd">var</span> <span class="nx">tree</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dyn_tree</span><span class="p">;</span></div><div class="line" id="LC259">			<span class="kd">var</span> <span class="nx">stree</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">static_tree</span><span class="p">;</span></div><div class="line" id="LC260">			<span class="kd">var</span> <span class="nx">elems</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">stat_desc</span><span class="p">.</span><span class="nx">elems</span><span class="p">;</span></div><div class="line" id="LC261">			<span class="kd">var</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">m</span><span class="p">;</span> <span class="c1">// iterate over heap elements</span></div><div class="line" id="LC262">			<span class="kd">var</span> <span class="nx">max_code</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="c1">// largest code with non zero frequency</span></div><div class="line" id="LC263">			<span class="kd">var</span> <span class="nx">node</span><span class="p">;</span> <span class="c1">// new node being created</span></div><div class="line" id="LC264"><br></div><div class="line" id="LC265">			<span class="c1">// Construct the initial heap, with least frequent element in</span></div><div class="line" id="LC266">			<span class="c1">// heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].</span></div><div class="line" id="LC267">			<span class="c1">// heap[0] is not used.</span></div><div class="line" id="LC268">			<span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC269">			<span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span> <span class="o">=</span> <span class="nx">HEAP_SIZE</span><span class="p">;</span></div><div class="line" id="LC270"><br></div><div class="line" id="LC271">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">elems</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC272">				<span class="k">if</span> <span class="p">(</span><span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC273">					<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">++</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span><span class="p">]</span> <span class="o">=</span> <span class="nx">max_code</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class="line" id="LC274">					<span class="nx">s</span><span class="p">.</span><span class="nx">depth</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC275">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC276">					<span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC277">				<span class="p">}</span></div><div class="line" id="LC278">			<span class="p">}</span></div><div class="line" id="LC279"><br></div><div class="line" id="LC280">			<span class="c1">// The pkzip format requires that at least one distance code exists,</span></div><div class="line" id="LC281">			<span class="c1">// and that at least one bit should be sent even if there is only one</span></div><div class="line" id="LC282">			<span class="c1">// possible code. So to avoid special checks later on we force at least</span></div><div class="line" id="LC283">			<span class="c1">// two codes of non zero frequency.</span></div><div class="line" id="LC284">			<span class="k">while</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC285">				<span class="nx">node</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">++</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span><span class="p">]</span> <span class="o">=</span> <span class="nx">max_code</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">?</span> <span class="o">++</span><span class="nx">max_code</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC286">				<span class="nx">tree</span><span class="p">[</span><span class="nx">node</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC287">				<span class="nx">s</span><span class="p">.</span><span class="nx">depth</span><span class="p">[</span><span class="nx">node</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC288">				<span class="nx">s</span><span class="p">.</span><span class="nx">opt_len</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC289">				<span class="k">if</span> <span class="p">(</span><span class="nx">stree</span><span class="p">)</span></div><div class="line" id="LC290">					<span class="nx">s</span><span class="p">.</span><span class="nx">static_len</span> <span class="o">-=</span> <span class="nx">stree</span><span class="p">[</span><span class="nx">node</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC291">				<span class="c1">// node is 0 or 1 so it does not have extra bits</span></div><div class="line" id="LC292">			<span class="p">}</span></div><div class="line" id="LC293">			<span class="nx">that</span><span class="p">.</span><span class="nx">max_code</span> <span class="o">=</span> <span class="nx">max_code</span><span class="p">;</span></div><div class="line" id="LC294"><br></div><div class="line" id="LC295">			<span class="c1">// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,</span></div><div class="line" id="LC296">			<span class="c1">// establish sub-heaps of increasing lengths:</span></div><div class="line" id="LC297"><br></div><div class="line" id="LC298">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span> <span class="o">/</span> <span class="mi">2</span><span class="p">);</span> <span class="nx">n</span> <span class="o">&gt;=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">n</span><span class="o">--</span><span class="p">)</span></div><div class="line" id="LC299">				<span class="nx">s</span><span class="p">.</span><span class="nx">pqdownheap</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="nx">n</span><span class="p">);</span></div><div class="line" id="LC300"><br></div><div class="line" id="LC301">			<span class="c1">// Construct the Huffman tree by repeatedly combining the least two</span></div><div class="line" id="LC302">			<span class="c1">// frequent nodes.</span></div><div class="line" id="LC303"><br></div><div class="line" id="LC304">			<span class="nx">node</span> <span class="o">=</span> <span class="nx">elems</span><span class="p">;</span> <span class="c1">// next internal node of the tree</span></div><div class="line" id="LC305">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC306">				<span class="c1">// n = node of least frequency</span></div><div class="line" id="LC307">				<span class="nx">n</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC308">				<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span><span class="o">--</span><span class="p">];</span></div><div class="line" id="LC309">				<span class="nx">s</span><span class="p">.</span><span class="nx">pqdownheap</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC310">				<span class="nx">m</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="c1">// m = node of next least frequency</span></div><div class="line" id="LC311"><br></div><div class="line" id="LC312">				<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">--</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span><span class="p">]</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span> <span class="c1">// keep the nodes sorted by frequency</span></div><div class="line" id="LC313">				<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">--</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span><span class="p">]</span> <span class="o">=</span> <span class="nx">m</span><span class="p">;</span></div><div class="line" id="LC314"><br></div><div class="line" id="LC315">				<span class="c1">// Create a new node father of n and m</span></div><div class="line" id="LC316">				<span class="nx">tree</span><span class="p">[</span><span class="nx">node</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">+</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]);</span></div><div class="line" id="LC317">				<span class="nx">s</span><span class="p">.</span><span class="nx">depth</span><span class="p">[</span><span class="nx">node</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">depth</span><span class="p">[</span><span class="nx">n</span><span class="p">],</span> <span class="nx">s</span><span class="p">.</span><span class="nx">depth</span><span class="p">[</span><span class="nx">m</span><span class="p">])</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC318">				<span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span></div><div class="line" id="LC319"><br></div><div class="line" id="LC320">				<span class="c1">// and insert the new node in the heap</span></div><div class="line" id="LC321">				<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">node</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC322">				<span class="nx">s</span><span class="p">.</span><span class="nx">pqdownheap</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC323">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_len</span> <span class="o">&gt;=</span> <span class="mi">2</span><span class="p">);</span></div><div class="line" id="LC324"><br></div><div class="line" id="LC325">			<span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="o">--</span><span class="nx">s</span><span class="p">.</span><span class="nx">heap_max</span><span class="p">]</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">heap</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC326"><br></div><div class="line" id="LC327">			<span class="c1">// At this point, the fields freq and dad are set. We can now</span></div><div class="line" id="LC328">			<span class="c1">// generate the bit lengths.</span></div><div class="line" id="LC329"><br></div><div class="line" id="LC330">			<span class="nx">gen_bitlen</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class="line" id="LC331"><br></div><div class="line" id="LC332">			<span class="c1">// The field len is now set, we can generate the bit codes</span></div><div class="line" id="LC333">			<span class="nx">gen_codes</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">max_code</span><span class="p">,</span> <span class="nx">s</span><span class="p">.</span><span class="nx">bl_count</span><span class="p">);</span></div><div class="line" id="LC334">		<span class="p">};</span></div><div class="line" id="LC335"><br></div><div class="line" id="LC336">	<span class="p">}</span></div><div class="line" id="LC337"><br></div><div class="line" id="LC338">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">_length_code</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span></div><div class="line" id="LC339">			<span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span></div><div class="line" id="LC340">			<span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span></div><div class="line" id="LC341">			<span class="mi">22</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span></div><div class="line" id="LC342">			<span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span></div><div class="line" id="LC343">			<span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span></div><div class="line" id="LC344">			<span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">28</span> <span class="p">];</span></div><div class="line" id="LC345"><br></div><div class="line" id="LC346">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">base_length</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">56</span><span class="p">,</span> <span class="mi">64</span><span class="p">,</span> <span class="mi">80</span><span class="p">,</span> <span class="mi">96</span><span class="p">,</span> <span class="mi">112</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="mi">160</span><span class="p">,</span> <span class="mi">192</span><span class="p">,</span> <span class="mi">224</span><span class="p">,</span> <span class="mi">0</span> <span class="p">];</span></div><div class="line" id="LC347"><br></div><div class="line" id="LC348">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">base_dist</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">64</span><span class="p">,</span> <span class="mi">96</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="mi">192</span><span class="p">,</span> <span class="mi">256</span><span class="p">,</span> <span class="mi">384</span><span class="p">,</span> <span class="mi">512</span><span class="p">,</span> <span class="mi">768</span><span class="p">,</span> <span class="mi">1024</span><span class="p">,</span> <span class="mi">1536</span><span class="p">,</span> <span class="mi">2048</span><span class="p">,</span> <span class="mi">3072</span><span class="p">,</span> <span class="mi">4096</span><span class="p">,</span> <span class="mi">6144</span><span class="p">,</span> <span class="mi">8192</span><span class="p">,</span> <span class="mi">12288</span><span class="p">,</span> <span class="mi">16384</span><span class="p">,</span></div><div class="line" id="LC349">			<span class="mi">24576</span> <span class="p">];</span></div><div class="line" id="LC350"><br></div><div class="line" id="LC351">	<span class="c1">// Mapping from a distance to a distance code. dist is the distance - 1 and</span></div><div class="line" id="LC352">	<span class="c1">// must not have side effects. _dist_code[256] and _dist_code[257] are never</span></div><div class="line" id="LC353">	<span class="c1">// used.</span></div><div class="line" id="LC354">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">d_code</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dist</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC355">		<span class="k">return</span> <span class="p">((</span><span class="nx">dist</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">256</span> <span class="o">?</span> <span class="nx">_dist_code</span><span class="p">[</span><span class="nx">dist</span><span class="p">]</span> <span class="o">:</span> <span class="nx">_dist_code</span><span class="p">[</span><span class="mi">256</span> <span class="o">+</span> <span class="p">((</span><span class="nx">dist</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">7</span><span class="p">)]);</span></div><div class="line" id="LC356">	<span class="p">};</span></div><div class="line" id="LC357"><br></div><div class="line" id="LC358">	<span class="c1">// extra bits for each length code</span></div><div class="line" id="LC359">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_lbits</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">0</span> <span class="p">];</span></div><div class="line" id="LC360"><br></div><div class="line" id="LC361">	<span class="c1">// extra bits for each distance code</span></div><div class="line" id="LC362">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_dbits</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">13</span> <span class="p">];</span></div><div class="line" id="LC363"><br></div><div class="line" id="LC364">	<span class="c1">// extra bits for each bit length code</span></div><div class="line" id="LC365">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_blbits</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span> <span class="p">];</span></div><div class="line" id="LC366"><br></div><div class="line" id="LC367">	<span class="nx">Tree</span><span class="p">.</span><span class="nx">bl_order</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">15</span> <span class="p">];</span></div><div class="line" id="LC368"><br></div><div class="line" id="LC369">	<span class="c1">// StaticTree</span></div><div class="line" id="LC370"><br></div><div class="line" id="LC371">	<span class="kd">function</span> <span class="nx">StaticTree</span><span class="p">(</span><span class="nx">static_tree</span><span class="p">,</span> <span class="nx">extra_bits</span><span class="p">,</span> <span class="nx">extra_base</span><span class="p">,</span> <span class="nx">elems</span><span class="p">,</span> <span class="nx">max_length</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC372">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC373">		<span class="nx">that</span><span class="p">.</span><span class="nx">static_tree</span> <span class="o">=</span> <span class="nx">static_tree</span><span class="p">;</span></div><div class="line" id="LC374">		<span class="nx">that</span><span class="p">.</span><span class="nx">extra_bits</span> <span class="o">=</span> <span class="nx">extra_bits</span><span class="p">;</span></div><div class="line" id="LC375">		<span class="nx">that</span><span class="p">.</span><span class="nx">extra_base</span> <span class="o">=</span> <span class="nx">extra_base</span><span class="p">;</span></div><div class="line" id="LC376">		<span class="nx">that</span><span class="p">.</span><span class="nx">elems</span> <span class="o">=</span> <span class="nx">elems</span><span class="p">;</span></div><div class="line" id="LC377">		<span class="nx">that</span><span class="p">.</span><span class="nx">max_length</span> <span class="o">=</span> <span class="nx">max_length</span><span class="p">;</span></div><div class="line" id="LC378">	<span class="p">}</span></div><div class="line" id="LC379"><br></div><div class="line" id="LC380">	<span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_ltree</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">140</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">76</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">204</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">44</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">172</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">108</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">236</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">156</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">92</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">220</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">60</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">188</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">124</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">252</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC381">			<span class="mi">130</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">66</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">194</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">34</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">162</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">98</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">226</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">146</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">82</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">210</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">178</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">114</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">242</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">138</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">74</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">202</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">42</span><span class="p">,</span></div><div class="line" id="LC382">			<span class="mi">8</span><span class="p">,</span> <span class="mi">170</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">106</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">234</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">154</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">90</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">218</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">58</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">186</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">122</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">250</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">134</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">70</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">198</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">166</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">102</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">230</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC383">			<span class="mi">22</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">150</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">86</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">214</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">54</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">182</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">118</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">246</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">142</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">78</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">206</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">46</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">174</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">110</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">238</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">158</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">94</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC384">			<span class="mi">222</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">62</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">190</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">126</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">254</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">129</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">65</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">193</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">33</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">161</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">97</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">225</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">145</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">81</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">209</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">49</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">177</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">113</span><span class="p">,</span></div><div class="line" id="LC385">			<span class="mi">8</span><span class="p">,</span> <span class="mi">241</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">137</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">73</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">201</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">41</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">169</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">105</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">233</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">153</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">89</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">217</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">57</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">185</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">121</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">249</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">133</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC386">			<span class="mi">69</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">197</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">37</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">165</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">101</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">229</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">149</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">85</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">213</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">53</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">181</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">117</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">245</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">141</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">77</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">205</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC387">			<span class="mi">173</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">109</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">237</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">157</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">93</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">221</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">61</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">189</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">125</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">253</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">275</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">147</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">403</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">83</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">339</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">211</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">467</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span></div><div class="line" id="LC388">			<span class="mi">51</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">307</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">179</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">435</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">115</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">371</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">243</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">499</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">267</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">139</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">395</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">75</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">331</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">203</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">459</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">43</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">299</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">171</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span></div><div class="line" id="LC389">			<span class="mi">427</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">107</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">363</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">235</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">491</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">283</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">155</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">411</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">91</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">347</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">219</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">475</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">59</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">315</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">187</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">443</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">123</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">379</span><span class="p">,</span></div><div class="line" id="LC390">			<span class="mi">9</span><span class="p">,</span> <span class="mi">251</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">507</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">263</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">135</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">391</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">71</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">327</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">199</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">455</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">39</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">295</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">167</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">423</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">103</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">359</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">231</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">487</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span></div><div class="line" id="LC391">			<span class="mi">9</span><span class="p">,</span> <span class="mi">279</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">151</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">407</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">87</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">343</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">215</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">471</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">55</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">311</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">183</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">439</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">119</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">375</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">247</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">503</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">271</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">143</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span></div><div class="line" id="LC392">			<span class="mi">399</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">79</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">335</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">207</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">463</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">47</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">303</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">175</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">431</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">111</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">367</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">239</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">495</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">31</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">287</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">159</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">415</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">95</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">351</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span></div><div class="line" id="LC393">			<span class="mi">223</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">479</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">63</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">319</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">191</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">447</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">127</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">383</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">255</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">511</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">64</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">96</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">80</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">112</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">72</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span></div><div class="line" id="LC394">			<span class="mi">40</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">104</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">88</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">56</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">120</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">68</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">84</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">52</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">116</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">131</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">67</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">195</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">35</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">163</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC395">			<span class="mi">99</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">227</span><span class="p">,</span> <span class="mi">8</span> <span class="p">];</span></div><div class="line" id="LC396"><br></div><div class="line" id="LC397">	<span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_dtree</span> <span class="o">=</span> <span class="p">[</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span></div><div class="line" id="LC398">			<span class="mi">25</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">5</span> <span class="p">];</span></div><div class="line" id="LC399"><br></div><div class="line" id="LC400">	<span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_l_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">StaticTree</span><span class="p">(</span><span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_ltree</span><span class="p">,</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_lbits</span><span class="p">,</span> <span class="nx">LITERALS</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">L_CODES</span><span class="p">,</span> <span class="nx">MAX_BITS</span><span class="p">);</span></div><div class="line" id="LC401"><br></div><div class="line" id="LC402">	<span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_d_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">StaticTree</span><span class="p">(</span><span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_dtree</span><span class="p">,</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_dbits</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">D_CODES</span><span class="p">,</span> <span class="nx">MAX_BITS</span><span class="p">);</span></div><div class="line" id="LC403"><br></div><div class="line" id="LC404">	<span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_bl_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">StaticTree</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_blbits</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">BL_CODES</span><span class="p">,</span> <span class="nx">MAX_BL_BITS</span><span class="p">);</span></div><div class="line" id="LC405"><br></div><div class="line" id="LC406">	<span class="c1">// Deflate</span></div><div class="line" id="LC407"><br></div><div class="line" id="LC408">	<span class="kd">var</span> <span class="nx">MAX_MEM_LEVEL</span> <span class="o">=</span> <span class="mi">9</span><span class="p">;</span></div><div class="line" id="LC409">	<span class="kd">var</span> <span class="nx">DEF_MEM_LEVEL</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC410"><br></div><div class="line" id="LC411">	<span class="kd">function</span> <span class="nx">Config</span><span class="p">(</span><span class="nx">good_length</span><span class="p">,</span> <span class="nx">max_lazy</span><span class="p">,</span> <span class="nx">nice_length</span><span class="p">,</span> <span class="nx">max_chain</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC412">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC413">		<span class="nx">that</span><span class="p">.</span><span class="nx">good_length</span> <span class="o">=</span> <span class="nx">good_length</span><span class="p">;</span></div><div class="line" id="LC414">		<span class="nx">that</span><span class="p">.</span><span class="nx">max_lazy</span> <span class="o">=</span> <span class="nx">max_lazy</span><span class="p">;</span></div><div class="line" id="LC415">		<span class="nx">that</span><span class="p">.</span><span class="nx">nice_length</span> <span class="o">=</span> <span class="nx">nice_length</span><span class="p">;</span></div><div class="line" id="LC416">		<span class="nx">that</span><span class="p">.</span><span class="nx">max_chain</span> <span class="o">=</span> <span class="nx">max_chain</span><span class="p">;</span></div><div class="line" id="LC417">		<span class="nx">that</span><span class="p">.</span><span class="nx">func</span> <span class="o">=</span> <span class="nx">func</span><span class="p">;</span></div><div class="line" id="LC418">	<span class="p">}</span></div><div class="line" id="LC419"><br></div><div class="line" id="LC420">	<span class="kd">var</span> <span class="nx">STORED</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC421">	<span class="kd">var</span> <span class="nx">FAST</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC422">	<span class="kd">var</span> <span class="nx">SLOW</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC423">	<span class="kd">var</span> <span class="nx">config_table</span> <span class="o">=</span> <span class="p">[</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">STORED</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="nx">FAST</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="nx">FAST</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="nx">FAST</span><span class="p">),</span></div><div class="line" id="LC424">			<span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="mi">256</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">),</span></div><div class="line" id="LC425">			<span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">32</span><span class="p">,</span> <span class="mi">128</span><span class="p">,</span> <span class="mi">258</span><span class="p">,</span> <span class="mi">1024</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">),</span> <span class="k">new</span> <span class="nx">Config</span><span class="p">(</span><span class="mi">32</span><span class="p">,</span> <span class="mi">258</span><span class="p">,</span> <span class="mi">258</span><span class="p">,</span> <span class="mi">4096</span><span class="p">,</span> <span class="nx">SLOW</span><span class="p">)</span> <span class="p">];</span></div><div class="line" id="LC426"><br></div><div class="line" id="LC427">	<span class="kd">var</span> <span class="nx">z_errmsg</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">"need dictionary"</span><span class="p">,</span> <span class="c1">// Z_NEED_DICT</span></div><div class="line" id="LC428">	<span class="c1">// 2</span></div><div class="line" id="LC429">	<span class="s2">"stream end"</span><span class="p">,</span> <span class="c1">// Z_STREAM_END 1</span></div><div class="line" id="LC430">	<span class="s2">""</span><span class="p">,</span> <span class="c1">// Z_OK 0</span></div><div class="line" id="LC431">	<span class="s2">""</span><span class="p">,</span> <span class="c1">// Z_ERRNO (-1)</span></div><div class="line" id="LC432">	<span class="s2">"stream error"</span><span class="p">,</span> <span class="c1">// Z_STREAM_ERROR (-2)</span></div><div class="line" id="LC433">	<span class="s2">"data error"</span><span class="p">,</span> <span class="c1">// Z_DATA_ERROR (-3)</span></div><div class="line" id="LC434">	<span class="s2">""</span><span class="p">,</span> <span class="c1">// Z_MEM_ERROR (-4)</span></div><div class="line" id="LC435">	<span class="s2">"buffer error"</span><span class="p">,</span> <span class="c1">// Z_BUF_ERROR (-5)</span></div><div class="line" id="LC436">	<span class="s2">""</span><span class="p">,</span><span class="c1">// Z_VERSION_ERROR (-6)</span></div><div class="line" id="LC437">	<span class="s2">""</span> <span class="p">];</span></div><div class="line" id="LC438"><br></div><div class="line" id="LC439">	<span class="c1">// block not completed, need more input or more output</span></div><div class="line" id="LC440">	<span class="kd">var</span> <span class="nx">NeedMore</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC441"><br></div><div class="line" id="LC442">	<span class="c1">// block flush performed</span></div><div class="line" id="LC443">	<span class="kd">var</span> <span class="nx">BlockDone</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC444"><br></div><div class="line" id="LC445">	<span class="c1">// finish started, need only more output at next deflate</span></div><div class="line" id="LC446">	<span class="kd">var</span> <span class="nx">FinishStarted</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC447"><br></div><div class="line" id="LC448">	<span class="c1">// finish done, accept no more input or output</span></div><div class="line" id="LC449">	<span class="kd">var</span> <span class="nx">FinishDone</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC450"><br></div><div class="line" id="LC451">	<span class="c1">// preset dictionary flag in zlib header</span></div><div class="line" id="LC452">	<span class="kd">var</span> <span class="nx">PRESET_DICT</span> <span class="o">=</span> <span class="mh">0x20</span><span class="p">;</span></div><div class="line" id="LC453"><br></div><div class="line" id="LC454">	<span class="kd">var</span> <span class="nx">INIT_STATE</span> <span class="o">=</span> <span class="mi">42</span><span class="p">;</span></div><div class="line" id="LC455">	<span class="kd">var</span> <span class="nx">BUSY_STATE</span> <span class="o">=</span> <span class="mi">113</span><span class="p">;</span></div><div class="line" id="LC456">	<span class="kd">var</span> <span class="nx">FINISH_STATE</span> <span class="o">=</span> <span class="mi">666</span><span class="p">;</span></div><div class="line" id="LC457"><br></div><div class="line" id="LC458">	<span class="c1">// The deflate compression method</span></div><div class="line" id="LC459">	<span class="kd">var</span> <span class="nx">Z_DEFLATED</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC460"><br></div><div class="line" id="LC461">	<span class="kd">var</span> <span class="nx">STORED_BLOCK</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC462">	<span class="kd">var</span> <span class="nx">STATIC_TREES</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC463">	<span class="kd">var</span> <span class="nx">DYN_TREES</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC464"><br></div><div class="line" id="LC465">	<span class="kd">var</span> <span class="nx">MIN_MATCH</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC466">	<span class="kd">var</span> <span class="nx">MAX_MATCH</span> <span class="o">=</span> <span class="mi">258</span><span class="p">;</span></div><div class="line" id="LC467">	<span class="kd">var</span> <span class="nx">MIN_LOOKAHEAD</span> <span class="o">=</span> <span class="p">(</span><span class="nx">MAX_MATCH</span> <span class="o">+</span> <span class="nx">MIN_MATCH</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC468"><br></div><div class="line" id="LC469">	<span class="kd">function</span> <span class="nx">smaller</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">depth</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC470">		<span class="kd">var</span> <span class="nx">tn2</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">n</span> <span class="o">*</span> <span class="mi">2</span><span class="p">];</span></div><div class="line" id="LC471">		<span class="kd">var</span> <span class="nx">tm2</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">m</span> <span class="o">*</span> <span class="mi">2</span><span class="p">];</span></div><div class="line" id="LC472">		<span class="k">return</span> <span class="p">(</span><span class="nx">tn2</span> <span class="o">&lt;</span> <span class="nx">tm2</span> <span class="o">||</span> <span class="p">(</span><span class="nx">tn2</span> <span class="o">==</span> <span class="nx">tm2</span> <span class="o">&amp;&amp;</span> <span class="nx">depth</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="nx">depth</span><span class="p">[</span><span class="nx">m</span><span class="p">]));</span></div><div class="line" id="LC473">	<span class="p">}</span></div><div class="line" id="LC474"><br></div><div class="line" id="LC475">	<span class="kd">function</span> <span class="nx">Deflate</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC476"><br></div><div class="line" id="LC477">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC478">		<span class="kd">var</span> <span class="nx">strm</span><span class="p">;</span> <span class="c1">// pointer back to this zlib stream</span></div><div class="line" id="LC479">		<span class="kd">var</span> <span class="nx">status</span><span class="p">;</span> <span class="c1">// as the name implies</span></div><div class="line" id="LC480">		<span class="c1">// pending_buf; // output still pending</span></div><div class="line" id="LC481">		<span class="kd">var</span> <span class="nx">pending_buf_size</span><span class="p">;</span> <span class="c1">// size of pending_buf</span></div><div class="line" id="LC482">		<span class="c1">// pending_out; // next pending byte to output to the stream</span></div><div class="line" id="LC483">		<span class="c1">// pending; // nb of bytes in the pending buffer</span></div><div class="line" id="LC484">		<span class="kd">var</span> <span class="nx">method</span><span class="p">;</span> <span class="c1">// STORED (for zip only) or DEFLATED</span></div><div class="line" id="LC485">		<span class="kd">var</span> <span class="nx">last_flush</span><span class="p">;</span> <span class="c1">// value of flush param for previous deflate call</span></div><div class="line" id="LC486"><br></div><div class="line" id="LC487">		<span class="kd">var</span> <span class="nx">w_size</span><span class="p">;</span> <span class="c1">// LZ77 window size (32K by default)</span></div><div class="line" id="LC488">		<span class="kd">var</span> <span class="nx">w_bits</span><span class="p">;</span> <span class="c1">// log2(w_size) (8..16)</span></div><div class="line" id="LC489">		<span class="kd">var</span> <span class="nx">w_mask</span><span class="p">;</span> <span class="c1">// w_size - 1</span></div><div class="line" id="LC490"><br></div><div class="line" id="LC491">		<span class="kd">var</span> <span class="nb">window</span><span class="p">;</span></div><div class="line" id="LC492">		<span class="c1">// Sliding window. Input bytes are read into the second half of the window,</span></div><div class="line" id="LC493">		<span class="c1">// and move to the first half later to keep a dictionary of at least wSize</span></div><div class="line" id="LC494">		<span class="c1">// bytes. With this organization, matches are limited to a distance of</span></div><div class="line" id="LC495">		<span class="c1">// wSize-MAX_MATCH bytes, but this ensures that IO is always</span></div><div class="line" id="LC496">		<span class="c1">// performed with a length multiple of the block size. Also, it limits</span></div><div class="line" id="LC497">		<span class="c1">// the window size to 64K, which is quite useful on MSDOS.</span></div><div class="line" id="LC498">		<span class="c1">// To do: use the user input buffer as sliding window.</span></div><div class="line" id="LC499"><br></div><div class="line" id="LC500">		<span class="kd">var</span> <span class="nx">window_size</span><span class="p">;</span></div><div class="line" id="LC501">		<span class="c1">// Actual size of window: 2*wSize, except when the user input buffer</span></div><div class="line" id="LC502">		<span class="c1">// is directly used as sliding window.</span></div><div class="line" id="LC503"><br></div><div class="line" id="LC504">		<span class="kd">var</span> <span class="nx">prev</span><span class="p">;</span></div><div class="line" id="LC505">		<span class="c1">// Link to older string with same hash index. To limit the size of this</span></div><div class="line" id="LC506">		<span class="c1">// array to 64K, this link is maintained only for the last 32K strings.</span></div><div class="line" id="LC507">		<span class="c1">// An index in this array is thus a window index modulo 32K.</span></div><div class="line" id="LC508"><br></div><div class="line" id="LC509">		<span class="kd">var</span> <span class="nx">head</span><span class="p">;</span> <span class="c1">// Heads of the hash chains or NIL.</span></div><div class="line" id="LC510"><br></div><div class="line" id="LC511">		<span class="kd">var</span> <span class="nx">ins_h</span><span class="p">;</span> <span class="c1">// hash index of string to be inserted</span></div><div class="line" id="LC512">		<span class="kd">var</span> <span class="nx">hash_size</span><span class="p">;</span> <span class="c1">// number of elements in hash table</span></div><div class="line" id="LC513">		<span class="kd">var</span> <span class="nx">hash_bits</span><span class="p">;</span> <span class="c1">// log2(hash_size)</span></div><div class="line" id="LC514">		<span class="kd">var</span> <span class="nx">hash_mask</span><span class="p">;</span> <span class="c1">// hash_size-1</span></div><div class="line" id="LC515"><br></div><div class="line" id="LC516">		<span class="c1">// Number of bits by which ins_h must be shifted at each input</span></div><div class="line" id="LC517">		<span class="c1">// step. It must be such that after MIN_MATCH steps, the oldest</span></div><div class="line" id="LC518">		<span class="c1">// byte no longer takes part in the hash key, that is:</span></div><div class="line" id="LC519">		<span class="c1">// hash_shift * MIN_MATCH &gt;= hash_bits</span></div><div class="line" id="LC520">		<span class="kd">var</span> <span class="nx">hash_shift</span><span class="p">;</span></div><div class="line" id="LC521"><br></div><div class="line" id="LC522">		<span class="c1">// Window position at the beginning of the current output block. Gets</span></div><div class="line" id="LC523">		<span class="c1">// negative when the window is moved backwards.</span></div><div class="line" id="LC524"><br></div><div class="line" id="LC525">		<span class="kd">var</span> <span class="nx">block_start</span><span class="p">;</span></div><div class="line" id="LC526"><br></div><div class="line" id="LC527">		<span class="kd">var</span> <span class="nx">match_length</span><span class="p">;</span> <span class="c1">// length of best match</span></div><div class="line" id="LC528">		<span class="kd">var</span> <span class="nx">prev_match</span><span class="p">;</span> <span class="c1">// previous match</span></div><div class="line" id="LC529">		<span class="kd">var</span> <span class="nx">match_available</span><span class="p">;</span> <span class="c1">// set if previous match exists</span></div><div class="line" id="LC530">		<span class="kd">var</span> <span class="nx">strstart</span><span class="p">;</span> <span class="c1">// start of string to insert</span></div><div class="line" id="LC531">		<span class="kd">var</span> <span class="nx">match_start</span><span class="p">;</span> <span class="c1">// start of matching string</span></div><div class="line" id="LC532">		<span class="kd">var</span> <span class="nx">lookahead</span><span class="p">;</span> <span class="c1">// number of valid bytes ahead in window</span></div><div class="line" id="LC533"><br></div><div class="line" id="LC534">		<span class="c1">// Length of the best match at previous step. Matches not greater than this</span></div><div class="line" id="LC535">		<span class="c1">// are discarded. This is used in the lazy match evaluation.</span></div><div class="line" id="LC536">		<span class="kd">var</span> <span class="nx">prev_length</span><span class="p">;</span></div><div class="line" id="LC537"><br></div><div class="line" id="LC538">		<span class="c1">// To speed up deflation, hash chains are never searched beyond this</span></div><div class="line" id="LC539">		<span class="c1">// length. A higher limit improves compression ratio but degrades the speed.</span></div><div class="line" id="LC540">		<span class="kd">var</span> <span class="nx">max_chain_length</span><span class="p">;</span></div><div class="line" id="LC541"><br></div><div class="line" id="LC542">		<span class="c1">// Attempt to find a better match only when the current match is strictly</span></div><div class="line" id="LC543">		<span class="c1">// smaller than this value. This mechanism is used only for compression</span></div><div class="line" id="LC544">		<span class="c1">// levels &gt;= 4.</span></div><div class="line" id="LC545">		<span class="kd">var</span> <span class="nx">max_lazy_match</span><span class="p">;</span></div><div class="line" id="LC546"><br></div><div class="line" id="LC547">		<span class="c1">// Insert new strings in the hash table only if the match length is not</span></div><div class="line" id="LC548">		<span class="c1">// greater than this length. This saves time but degrades compression.</span></div><div class="line" id="LC549">		<span class="c1">// max_insert_length is used only for compression levels &lt;= 3.</span></div><div class="line" id="LC550"><br></div><div class="line" id="LC551">		<span class="kd">var</span> <span class="nx">level</span><span class="p">;</span> <span class="c1">// compression level (1..9)</span></div><div class="line" id="LC552">		<span class="kd">var</span> <span class="nx">strategy</span><span class="p">;</span> <span class="c1">// favor or force Huffman coding</span></div><div class="line" id="LC553"><br></div><div class="line" id="LC554">		<span class="c1">// Use a faster search when the previous match is longer than this</span></div><div class="line" id="LC555">		<span class="kd">var</span> <span class="nx">good_match</span><span class="p">;</span></div><div class="line" id="LC556"><br></div><div class="line" id="LC557">		<span class="c1">// Stop searching when current match exceeds this</span></div><div class="line" id="LC558">		<span class="kd">var</span> <span class="nx">nice_match</span><span class="p">;</span></div><div class="line" id="LC559"><br></div><div class="line" id="LC560">		<span class="kd">var</span> <span class="nx">dyn_ltree</span><span class="p">;</span> <span class="c1">// literal and length tree</span></div><div class="line" id="LC561">		<span class="kd">var</span> <span class="nx">dyn_dtree</span><span class="p">;</span> <span class="c1">// distance tree</span></div><div class="line" id="LC562">		<span class="kd">var</span> <span class="nx">bl_tree</span><span class="p">;</span> <span class="c1">// Huffman tree for bit lengths</span></div><div class="line" id="LC563"><br></div><div class="line" id="LC564">		<span class="kd">var</span> <span class="nx">l_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Tree</span><span class="p">();</span> <span class="c1">// desc for literal tree</span></div><div class="line" id="LC565">		<span class="kd">var</span> <span class="nx">d_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Tree</span><span class="p">();</span> <span class="c1">// desc for distance tree</span></div><div class="line" id="LC566">		<span class="kd">var</span> <span class="nx">bl_desc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Tree</span><span class="p">();</span> <span class="c1">// desc for bit length tree</span></div><div class="line" id="LC567"><br></div><div class="line" id="LC568">		<span class="c1">// that.heap_len; // number of elements in the heap</span></div><div class="line" id="LC569">		<span class="c1">// that.heap_max; // element of largest frequency</span></div><div class="line" id="LC570">		<span class="c1">// The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.</span></div><div class="line" id="LC571">		<span class="c1">// The same heap array is used to build all trees.</span></div><div class="line" id="LC572"><br></div><div class="line" id="LC573">		<span class="c1">// Depth of each subtree used as tie breaker for trees of equal frequency</span></div><div class="line" id="LC574">		<span class="nx">that</span><span class="p">.</span><span class="nx">depth</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC575"><br></div><div class="line" id="LC576">		<span class="kd">var</span> <span class="nx">l_buf</span><span class="p">;</span> <span class="c1">// index for literals or lengths */</span></div><div class="line" id="LC577"><br></div><div class="line" id="LC578">		<span class="c1">// Size of match buffer for literals/lengths. There are 4 reasons for</span></div><div class="line" id="LC579">		<span class="c1">// limiting lit_bufsize to 64K:</span></div><div class="line" id="LC580">		<span class="c1">// - frequencies can be kept in 16 bit counters</span></div><div class="line" id="LC581">		<span class="c1">// - if compression is not successful for the first block, all input</span></div><div class="line" id="LC582">		<span class="c1">// data is still in the window so we can still emit a stored block even</span></div><div class="line" id="LC583">		<span class="c1">// when input comes from standard input. (This can also be done for</span></div><div class="line" id="LC584">		<span class="c1">// all blocks if lit_bufsize is not greater than 32K.)</span></div><div class="line" id="LC585">		<span class="c1">// - if compression is not successful for a file smaller than 64K, we can</span></div><div class="line" id="LC586">		<span class="c1">// even emit a stored file instead of a stored block (saving 5 bytes).</span></div><div class="line" id="LC587">		<span class="c1">// This is applicable only for zip (not gzip or zlib).</span></div><div class="line" id="LC588">		<span class="c1">// - creating new Huffman trees less frequently may not provide fast</span></div><div class="line" id="LC589">		<span class="c1">// adaptation to changes in the input data statistics. (Take for</span></div><div class="line" id="LC590">		<span class="c1">// example a binary file with poorly compressible code followed by</span></div><div class="line" id="LC591">		<span class="c1">// a highly compressible string table.) Smaller buffer sizes give</span></div><div class="line" id="LC592">		<span class="c1">// fast adaptation but have of course the overhead of transmitting</span></div><div class="line" id="LC593">		<span class="c1">// trees more frequently.</span></div><div class="line" id="LC594">		<span class="c1">// - I can't count above 4</span></div><div class="line" id="LC595">		<span class="kd">var</span> <span class="nx">lit_bufsize</span><span class="p">;</span></div><div class="line" id="LC596"><br></div><div class="line" id="LC597">		<span class="kd">var</span> <span class="nx">last_lit</span><span class="p">;</span> <span class="c1">// running index in l_buf</span></div><div class="line" id="LC598"><br></div><div class="line" id="LC599">		<span class="c1">// Buffer for distances. To simplify the code, d_buf and l_buf have</span></div><div class="line" id="LC600">		<span class="c1">// the same number of elements. To use different lengths, an extra flag</span></div><div class="line" id="LC601">		<span class="c1">// array would be necessary.</span></div><div class="line" id="LC602"><br></div><div class="line" id="LC603">		<span class="kd">var</span> <span class="nx">d_buf</span><span class="p">;</span> <span class="c1">// index of pendig_buf</span></div><div class="line" id="LC604"><br></div><div class="line" id="LC605">		<span class="c1">// that.opt_len; // bit length of current block with optimal trees</span></div><div class="line" id="LC606">		<span class="c1">// that.static_len; // bit length of current block with static trees</span></div><div class="line" id="LC607">		<span class="kd">var</span> <span class="nx">matches</span><span class="p">;</span> <span class="c1">// number of string matches in current block</span></div><div class="line" id="LC608">		<span class="kd">var</span> <span class="nx">last_eob_len</span><span class="p">;</span> <span class="c1">// bit length of EOB code for last block</span></div><div class="line" id="LC609"><br></div><div class="line" id="LC610">		<span class="c1">// Output buffer. bits are inserted starting at the bottom (least</span></div><div class="line" id="LC611">		<span class="c1">// significant bits).</span></div><div class="line" id="LC612">		<span class="kd">var</span> <span class="nx">bi_buf</span><span class="p">;</span></div><div class="line" id="LC613"><br></div><div class="line" id="LC614">		<span class="c1">// Number of valid bits in bi_buf. All bits above the last valid bit</span></div><div class="line" id="LC615">		<span class="c1">// are always zero.</span></div><div class="line" id="LC616">		<span class="kd">var</span> <span class="nx">bi_valid</span><span class="p">;</span></div><div class="line" id="LC617"><br></div><div class="line" id="LC618">		<span class="c1">// number of codes at each bit length for an optimal tree</span></div><div class="line" id="LC619">		<span class="nx">that</span><span class="p">.</span><span class="nx">bl_count</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC620"><br></div><div class="line" id="LC621">		<span class="c1">// heap used to build the Huffman trees</span></div><div class="line" id="LC622">		<span class="nx">that</span><span class="p">.</span><span class="nx">heap</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC623"><br></div><div class="line" id="LC624">		<span class="nx">dyn_ltree</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC625">		<span class="nx">dyn_dtree</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC626">		<span class="nx">bl_tree</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC627"><br></div><div class="line" id="LC628">		<span class="kd">function</span> <span class="nx">lm_init</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC629">			<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></div><div class="line" id="LC630">			<span class="nx">window_size</span> <span class="o">=</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC631"><br></div><div class="line" id="LC632">			<span class="nx">head</span><span class="p">[</span><span class="nx">hash_size</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC633">			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">hash_size</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC634">				<span class="nx">head</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC635">			<span class="p">}</span></div><div class="line" id="LC636"><br></div><div class="line" id="LC637">			<span class="c1">// Set the default configuration parameters:</span></div><div class="line" id="LC638">			<span class="nx">max_lazy_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">max_lazy</span><span class="p">;</span></div><div class="line" id="LC639">			<span class="nx">good_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">good_length</span><span class="p">;</span></div><div class="line" id="LC640">			<span class="nx">nice_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">nice_length</span><span class="p">;</span></div><div class="line" id="LC641">			<span class="nx">max_chain_length</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">max_chain</span><span class="p">;</span></div><div class="line" id="LC642"><br></div><div class="line" id="LC643">			<span class="nx">strstart</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC644">			<span class="nx">block_start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC645">			<span class="nx">lookahead</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC646">			<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">prev_length</span> <span class="o">=</span> <span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC647">			<span class="nx">match_available</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC648">			<span class="nx">ins_h</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC649">		<span class="p">}</span></div><div class="line" id="LC650"><br></div><div class="line" id="LC651">		<span class="kd">function</span> <span class="nx">init_block</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC652">			<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></div><div class="line" id="LC653">			<span class="c1">// Initialize the trees.</span></div><div class="line" id="LC654">			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">L_CODES</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC655">				<span class="nx">dyn_ltree</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC656">			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">D_CODES</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC657">				<span class="nx">dyn_dtree</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC658">			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">BL_CODES</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC659">				<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC660"><br></div><div class="line" id="LC661">			<span class="nx">dyn_ltree</span><span class="p">[</span><span class="nx">END_BLOCK</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC662">			<span class="nx">that</span><span class="p">.</span><span class="nx">opt_len</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">static_len</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC663">			<span class="nx">last_lit</span> <span class="o">=</span> <span class="nx">matches</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC664">		<span class="p">}</span></div><div class="line" id="LC665"><br></div><div class="line" id="LC666">		<span class="c1">// Initialize the tree data structures for a new zlib stream.</span></div><div class="line" id="LC667">		<span class="kd">function</span> <span class="nx">tr_init</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC668"><br></div><div class="line" id="LC669">			<span class="nx">l_desc</span><span class="p">.</span><span class="nx">dyn_tree</span> <span class="o">=</span> <span class="nx">dyn_ltree</span><span class="p">;</span></div><div class="line" id="LC670">			<span class="nx">l_desc</span><span class="p">.</span><span class="nx">stat_desc</span> <span class="o">=</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_l_desc</span><span class="p">;</span></div><div class="line" id="LC671"><br></div><div class="line" id="LC672">			<span class="nx">d_desc</span><span class="p">.</span><span class="nx">dyn_tree</span> <span class="o">=</span> <span class="nx">dyn_dtree</span><span class="p">;</span></div><div class="line" id="LC673">			<span class="nx">d_desc</span><span class="p">.</span><span class="nx">stat_desc</span> <span class="o">=</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_d_desc</span><span class="p">;</span></div><div class="line" id="LC674"><br></div><div class="line" id="LC675">			<span class="nx">bl_desc</span><span class="p">.</span><span class="nx">dyn_tree</span> <span class="o">=</span> <span class="nx">bl_tree</span><span class="p">;</span></div><div class="line" id="LC676">			<span class="nx">bl_desc</span><span class="p">.</span><span class="nx">stat_desc</span> <span class="o">=</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_bl_desc</span><span class="p">;</span></div><div class="line" id="LC677"><br></div><div class="line" id="LC678">			<span class="nx">bi_buf</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC679">			<span class="nx">bi_valid</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC680">			<span class="nx">last_eob_len</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span> <span class="c1">// enough lookahead for inflate</span></div><div class="line" id="LC681"><br></div><div class="line" id="LC682">			<span class="c1">// Initialize the first block of the first file:</span></div><div class="line" id="LC683">			<span class="nx">init_block</span><span class="p">();</span></div><div class="line" id="LC684">		<span class="p">}</span></div><div class="line" id="LC685"><br></div><div class="line" id="LC686">		<span class="c1">// Restore the heap property by moving down the tree starting at node k,</span></div><div class="line" id="LC687">		<span class="c1">// exchanging a node with the smallest of its two sons if necessary,</span></div><div class="line" id="LC688">		<span class="c1">// stopping</span></div><div class="line" id="LC689">		<span class="c1">// when the heap property is re-established (each father smaller than its</span></div><div class="line" id="LC690">		<span class="c1">// two sons).</span></div><div class="line" id="LC691">		<span class="nx">that</span><span class="p">.</span><span class="nx">pqdownheap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="c1">// the tree to restore</span></div><div class="line" id="LC692">		<span class="nx">k</span> <span class="c1">// node to move down</span></div><div class="line" id="LC693">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC694">			<span class="kd">var</span> <span class="nx">heap</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">heap</span><span class="p">;</span></div><div class="line" id="LC695">			<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">heap</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></div><div class="line" id="LC696">			<span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// left son of k</span></div><div class="line" id="LC697">			<span class="k">while</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">heap_len</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC698">				<span class="c1">// Set j to the smallest of the two sons:</span></div><div class="line" id="LC699">				<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">heap_len</span> <span class="o">&amp;&amp;</span> <span class="nx">smaller</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="nx">heap</span><span class="p">[</span><span class="nx">j</span> <span class="o">+</span> <span class="mi">1</span><span class="p">],</span> <span class="nx">heap</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">that</span><span class="p">.</span><span class="nx">depth</span><span class="p">))</span> <span class="p">{</span></div><div class="line" id="LC700">					<span class="nx">j</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC701">				<span class="p">}</span></div><div class="line" id="LC702">				<span class="c1">// Exit if v is smaller than both sons</span></div><div class="line" id="LC703">				<span class="k">if</span> <span class="p">(</span><span class="nx">smaller</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">heap</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">that</span><span class="p">.</span><span class="nx">depth</span><span class="p">))</span></div><div class="line" id="LC704">					<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC705"><br></div><div class="line" id="LC706">				<span class="c1">// Exchange v with the smallest son</span></div><div class="line" id="LC707">				<span class="nx">heap</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">heap</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class="line" id="LC708">				<span class="nx">k</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span></div><div class="line" id="LC709">				<span class="c1">// And continue down the tree, setting j to the left son of k</span></div><div class="line" id="LC710">				<span class="nx">j</span> <span class="o">&lt;&lt;=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC711">			<span class="p">}</span></div><div class="line" id="LC712">			<span class="nx">heap</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">v</span><span class="p">;</span></div><div class="line" id="LC713">		<span class="p">};</span></div><div class="line" id="LC714"><br></div><div class="line" id="LC715">		<span class="c1">// Scan a literal or distance tree to determine the frequencies of the codes</span></div><div class="line" id="LC716">		<span class="c1">// in the bit length tree.</span></div><div class="line" id="LC717">		<span class="kd">function</span> <span class="nx">scan_tree</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span><span class="c1">// the tree to be scanned</span></div><div class="line" id="LC718">		<span class="nx">max_code</span> <span class="c1">// and its largest code of non zero frequency</span></div><div class="line" id="LC719">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC720">			<span class="kd">var</span> <span class="nx">n</span><span class="p">;</span> <span class="c1">// iterates over all tree elements</span></div><div class="line" id="LC721">			<span class="kd">var</span> <span class="nx">prevlen</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="c1">// last emitted length</span></div><div class="line" id="LC722">			<span class="kd">var</span> <span class="nx">curlen</span><span class="p">;</span> <span class="c1">// length of current code</span></div><div class="line" id="LC723">			<span class="kd">var</span> <span class="nx">nextlen</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="mi">0</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span> <span class="c1">// length of next code</span></div><div class="line" id="LC724">			<span class="kd">var</span> <span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// repeat count of the current code</span></div><div class="line" id="LC725">			<span class="kd">var</span> <span class="nx">max_count</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span> <span class="c1">// max repeat count</span></div><div class="line" id="LC726">			<span class="kd">var</span> <span class="nx">min_count</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span> <span class="c1">// min repeat count</span></div><div class="line" id="LC727"><br></div><div class="line" id="LC728">			<span class="k">if</span> <span class="p">(</span><span class="nx">nextlen</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC729">				<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">138</span><span class="p">;</span></div><div class="line" id="LC730">				<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC731">			<span class="p">}</span></div><div class="line" id="LC732">			<span class="nx">tree</span><span class="p">[(</span><span class="nx">max_code</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mh">0xffff</span><span class="p">;</span> <span class="c1">// guard</span></div><div class="line" id="LC733"><br></div><div class="line" id="LC734">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;=</span> <span class="nx">max_code</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC735">				<span class="nx">curlen</span> <span class="o">=</span> <span class="nx">nextlen</span><span class="p">;</span></div><div class="line" id="LC736">				<span class="nx">nextlen</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[(</span><span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC737">				<span class="k">if</span> <span class="p">(</span><span class="o">++</span><span class="nx">count</span> <span class="o">&lt;</span> <span class="nx">max_count</span> <span class="o">&amp;&amp;</span> <span class="nx">curlen</span> <span class="o">==</span> <span class="nx">nextlen</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC738">					<span class="k">continue</span><span class="p">;</span></div><div class="line" id="LC739">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&lt;</span> <span class="nx">min_count</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC740">					<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">curlen</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">count</span><span class="p">;</span></div><div class="line" id="LC741">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC742">					<span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">!=</span> <span class="nx">prevlen</span><span class="p">)</span></div><div class="line" id="LC743">						<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">curlen</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC744">					<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">REP_3_6</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC745">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&lt;=</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC746">					<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">REPZ_3_10</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC747">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC748">					<span class="nx">bl_tree</span><span class="p">[</span><span class="nx">REPZ_11_138</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC749">				<span class="p">}</span></div><div class="line" id="LC750">				<span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC751">				<span class="nx">prevlen</span> <span class="o">=</span> <span class="nx">curlen</span><span class="p">;</span></div><div class="line" id="LC752">				<span class="k">if</span> <span class="p">(</span><span class="nx">nextlen</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC753">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">138</span><span class="p">;</span></div><div class="line" id="LC754">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC755">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">==</span> <span class="nx">nextlen</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC756">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">6</span><span class="p">;</span></div><div class="line" id="LC757">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC758">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC759">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span></div><div class="line" id="LC760">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span></div><div class="line" id="LC761">				<span class="p">}</span></div><div class="line" id="LC762">			<span class="p">}</span></div><div class="line" id="LC763">		<span class="p">}</span></div><div class="line" id="LC764"><br></div><div class="line" id="LC765">		<span class="c1">// Construct the Huffman tree for the bit lengths and return the index in</span></div><div class="line" id="LC766">		<span class="c1">// bl_order of the last bit length code to send.</span></div><div class="line" id="LC767">		<span class="kd">function</span> <span class="nx">build_bl_tree</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC768">			<span class="kd">var</span> <span class="nx">max_blindex</span><span class="p">;</span> <span class="c1">// index of last bit length code of non zero freq</span></div><div class="line" id="LC769"><br></div><div class="line" id="LC770">			<span class="c1">// Determine the bit length frequencies for literal and distance trees</span></div><div class="line" id="LC771">			<span class="nx">scan_tree</span><span class="p">(</span><span class="nx">dyn_ltree</span><span class="p">,</span> <span class="nx">l_desc</span><span class="p">.</span><span class="nx">max_code</span><span class="p">);</span></div><div class="line" id="LC772">			<span class="nx">scan_tree</span><span class="p">(</span><span class="nx">dyn_dtree</span><span class="p">,</span> <span class="nx">d_desc</span><span class="p">.</span><span class="nx">max_code</span><span class="p">);</span></div><div class="line" id="LC773"><br></div><div class="line" id="LC774">			<span class="c1">// Build the bit length tree:</span></div><div class="line" id="LC775">			<span class="nx">bl_desc</span><span class="p">.</span><span class="nx">build_tree</span><span class="p">(</span><span class="nx">that</span><span class="p">);</span></div><div class="line" id="LC776">			<span class="c1">// opt_len now includes the length of the tree representations, except</span></div><div class="line" id="LC777">			<span class="c1">// the lengths of the bit lengths codes and the 5+5+4 bits for the</span></div><div class="line" id="LC778">			<span class="c1">// counts.</span></div><div class="line" id="LC779"><br></div><div class="line" id="LC780">			<span class="c1">// Determine the number of bit length codes to send. The pkzip format</span></div><div class="line" id="LC781">			<span class="c1">// requires that at least 4 bit length codes be sent. (appnote.txt says</span></div><div class="line" id="LC782">			<span class="c1">// 3 but the actual value used is 4.)</span></div><div class="line" id="LC783">			<span class="k">for</span> <span class="p">(</span><span class="nx">max_blindex</span> <span class="o">=</span> <span class="nx">BL_CODES</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">max_blindex</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">max_blindex</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC784">				<span class="k">if</span> <span class="p">(</span><span class="nx">bl_tree</span><span class="p">[</span><span class="nx">Tree</span><span class="p">.</span><span class="nx">bl_order</span><span class="p">[</span><span class="nx">max_blindex</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC785">					<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC786">			<span class="p">}</span></div><div class="line" id="LC787">			<span class="c1">// Update opt_len to include the bit length tree and counts</span></div><div class="line" id="LC788">			<span class="nx">that</span><span class="p">.</span><span class="nx">opt_len</span> <span class="o">+=</span> <span class="mi">3</span> <span class="o">*</span> <span class="p">(</span><span class="nx">max_blindex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="mi">5</span> <span class="o">+</span> <span class="mi">5</span> <span class="o">+</span> <span class="mi">4</span><span class="p">;</span></div><div class="line" id="LC789"><br></div><div class="line" id="LC790">			<span class="k">return</span> <span class="nx">max_blindex</span><span class="p">;</span></div><div class="line" id="LC791">		<span class="p">}</span></div><div class="line" id="LC792"><br></div><div class="line" id="LC793">		<span class="c1">// Output a byte on the stream.</span></div><div class="line" id="LC794">		<span class="c1">// IN assertion: there is enough room in pending_buf.</span></div><div class="line" id="LC795">		<span class="kd">function</span> <span class="nx">put_byte</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC796">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">that</span><span class="p">.</span><span class="nx">pending</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">p</span><span class="p">;</span></div><div class="line" id="LC797">		<span class="p">}</span></div><div class="line" id="LC798"><br></div><div class="line" id="LC799">		<span class="kd">function</span> <span class="nx">put_short</span><span class="p">(</span><span class="nx">w</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC800">			<span class="nx">put_byte</span><span class="p">(</span><span class="nx">w</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC801">			<span class="nx">put_byte</span><span class="p">((</span><span class="nx">w</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC802">		<span class="p">}</span></div><div class="line" id="LC803"><br></div><div class="line" id="LC804">		<span class="kd">function</span> <span class="nx">putShortMSB</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC805">			<span class="nx">put_byte</span><span class="p">((</span><span class="nx">b</span> <span class="o">&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC806">			<span class="nx">put_byte</span><span class="p">((</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC807">		<span class="p">}</span></div><div class="line" id="LC808"><br></div><div class="line" id="LC809">		<span class="kd">function</span> <span class="nx">send_bits</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC810">			<span class="kd">var</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC811">			<span class="k">if</span> <span class="p">(</span><span class="nx">bi_valid</span> <span class="o">&gt;</span> <span class="nx">Buf_size</span> <span class="o">-</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC812">				<span class="nx">val</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class="line" id="LC813">				<span class="c1">// bi_buf |= (val &lt;&lt; bi_valid);</span></div><div class="line" id="LC814">				<span class="nx">bi_buf</span> <span class="o">|=</span> <span class="p">((</span><span class="nx">val</span> <span class="o">&lt;&lt;</span> <span class="nx">bi_valid</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC815">				<span class="nx">put_short</span><span class="p">(</span><span class="nx">bi_buf</span><span class="p">);</span></div><div class="line" id="LC816">				<span class="nx">bi_buf</span> <span class="o">=</span> <span class="nx">val</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="nx">Buf_size</span> <span class="o">-</span> <span class="nx">bi_valid</span><span class="p">);</span></div><div class="line" id="LC817">				<span class="nx">bi_valid</span> <span class="o">+=</span> <span class="nx">len</span> <span class="o">-</span> <span class="nx">Buf_size</span><span class="p">;</span></div><div class="line" id="LC818">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC819">				<span class="c1">// bi_buf |= (value) &lt;&lt; bi_valid;</span></div><div class="line" id="LC820">				<span class="nx">bi_buf</span> <span class="o">|=</span> <span class="p">(((</span><span class="nx">value</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">bi_valid</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC821">				<span class="nx">bi_valid</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC822">			<span class="p">}</span></div><div class="line" id="LC823">		<span class="p">}</span></div><div class="line" id="LC824"><br></div><div class="line" id="LC825">		<span class="kd">function</span> <span class="nx">send_code</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">tree</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC826">			<span class="kd">var</span> <span class="nx">c2</span> <span class="o">=</span> <span class="nx">c</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC827">			<span class="nx">send_bits</span><span class="p">(</span><span class="nx">tree</span><span class="p">[</span><span class="nx">c2</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">,</span> <span class="nx">tree</span><span class="p">[</span><span class="nx">c2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC828">		<span class="p">}</span></div><div class="line" id="LC829"><br></div><div class="line" id="LC830">		<span class="c1">// Send a literal or distance tree in compressed form, using the codes in</span></div><div class="line" id="LC831">		<span class="c1">// bl_tree.</span></div><div class="line" id="LC832">		<span class="kd">function</span> <span class="nx">send_tree</span><span class="p">(</span><span class="nx">tree</span><span class="p">,</span><span class="c1">// the tree to be sent</span></div><div class="line" id="LC833">		<span class="nx">max_code</span> <span class="c1">// and its largest code of non zero frequency</span></div><div class="line" id="LC834">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC835">			<span class="kd">var</span> <span class="nx">n</span><span class="p">;</span> <span class="c1">// iterates over all tree elements</span></div><div class="line" id="LC836">			<span class="kd">var</span> <span class="nx">prevlen</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="c1">// last emitted length</span></div><div class="line" id="LC837">			<span class="kd">var</span> <span class="nx">curlen</span><span class="p">;</span> <span class="c1">// length of current code</span></div><div class="line" id="LC838">			<span class="kd">var</span> <span class="nx">nextlen</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[</span><span class="mi">0</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span> <span class="c1">// length of next code</span></div><div class="line" id="LC839">			<span class="kd">var</span> <span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// repeat count of the current code</span></div><div class="line" id="LC840">			<span class="kd">var</span> <span class="nx">max_count</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span> <span class="c1">// max repeat count</span></div><div class="line" id="LC841">			<span class="kd">var</span> <span class="nx">min_count</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span> <span class="c1">// min repeat count</span></div><div class="line" id="LC842"><br></div><div class="line" id="LC843">			<span class="k">if</span> <span class="p">(</span><span class="nx">nextlen</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC844">				<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">138</span><span class="p">;</span></div><div class="line" id="LC845">				<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC846">			<span class="p">}</span></div><div class="line" id="LC847"><br></div><div class="line" id="LC848">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;=</span> <span class="nx">max_code</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC849">				<span class="nx">curlen</span> <span class="o">=</span> <span class="nx">nextlen</span><span class="p">;</span></div><div class="line" id="LC850">				<span class="nx">nextlen</span> <span class="o">=</span> <span class="nx">tree</span><span class="p">[(</span><span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC851">				<span class="k">if</span> <span class="p">(</span><span class="o">++</span><span class="nx">count</span> <span class="o">&lt;</span> <span class="nx">max_count</span> <span class="o">&amp;&amp;</span> <span class="nx">curlen</span> <span class="o">==</span> <span class="nx">nextlen</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC852">					<span class="k">continue</span><span class="p">;</span></div><div class="line" id="LC853">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&lt;</span> <span class="nx">min_count</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC854">					<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC855">						<span class="nx">send_code</span><span class="p">(</span><span class="nx">curlen</span><span class="p">,</span> <span class="nx">bl_tree</span><span class="p">);</span></div><div class="line" id="LC856">					<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">count</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC857">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC858">					<span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">!=</span> <span class="nx">prevlen</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC859">						<span class="nx">send_code</span><span class="p">(</span><span class="nx">curlen</span><span class="p">,</span> <span class="nx">bl_tree</span><span class="p">);</span></div><div class="line" id="LC860">						<span class="nx">count</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC861">					<span class="p">}</span></div><div class="line" id="LC862">					<span class="nx">send_code</span><span class="p">(</span><span class="nx">REP_3_6</span><span class="p">,</span> <span class="nx">bl_tree</span><span class="p">);</span></div><div class="line" id="LC863">					<span class="nx">send_bits</span><span class="p">(</span><span class="nx">count</span> <span class="o">-</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class="line" id="LC864">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&lt;=</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC865">					<span class="nx">send_code</span><span class="p">(</span><span class="nx">REPZ_3_10</span><span class="p">,</span> <span class="nx">bl_tree</span><span class="p">);</span></div><div class="line" id="LC866">					<span class="nx">send_bits</span><span class="p">(</span><span class="nx">count</span> <span class="o">-</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC867">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC868">					<span class="nx">send_code</span><span class="p">(</span><span class="nx">REPZ_11_138</span><span class="p">,</span> <span class="nx">bl_tree</span><span class="p">);</span></div><div class="line" id="LC869">					<span class="nx">send_bits</span><span class="p">(</span><span class="nx">count</span> <span class="o">-</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">7</span><span class="p">);</span></div><div class="line" id="LC870">				<span class="p">}</span></div><div class="line" id="LC871">				<span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC872">				<span class="nx">prevlen</span> <span class="o">=</span> <span class="nx">curlen</span><span class="p">;</span></div><div class="line" id="LC873">				<span class="k">if</span> <span class="p">(</span><span class="nx">nextlen</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC874">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">138</span><span class="p">;</span></div><div class="line" id="LC875">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC876">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">curlen</span> <span class="o">==</span> <span class="nx">nextlen</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC877">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">6</span><span class="p">;</span></div><div class="line" id="LC878">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC879">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC880">					<span class="nx">max_count</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span></div><div class="line" id="LC881">					<span class="nx">min_count</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span></div><div class="line" id="LC882">				<span class="p">}</span></div><div class="line" id="LC883">			<span class="p">}</span></div><div class="line" id="LC884">		<span class="p">}</span></div><div class="line" id="LC885"><br></div><div class="line" id="LC886">		<span class="c1">// Send the header for a block using dynamic Huffman trees: the counts, the</span></div><div class="line" id="LC887">		<span class="c1">// lengths of the bit length codes, the literal tree and the distance tree.</span></div><div class="line" id="LC888">		<span class="c1">// IN assertion: lcodes &gt;= 257, dcodes &gt;= 1, blcodes &gt;= 4.</span></div><div class="line" id="LC889">		<span class="kd">function</span> <span class="nx">send_all_trees</span><span class="p">(</span><span class="nx">lcodes</span><span class="p">,</span> <span class="nx">dcodes</span><span class="p">,</span> <span class="nx">blcodes</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC890">			<span class="kd">var</span> <span class="nx">rank</span><span class="p">;</span> <span class="c1">// index in bl_order</span></div><div class="line" id="LC891"><br></div><div class="line" id="LC892">			<span class="nx">send_bits</span><span class="p">(</span><span class="nx">lcodes</span> <span class="o">-</span> <span class="mi">257</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span> <span class="c1">// not +255 as stated in appnote.txt</span></div><div class="line" id="LC893">			<span class="nx">send_bits</span><span class="p">(</span><span class="nx">dcodes</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class="line" id="LC894">			<span class="nx">send_bits</span><span class="p">(</span><span class="nx">blcodes</span> <span class="o">-</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span> <span class="c1">// not -3 as stated in appnote.txt</span></div><div class="line" id="LC895">			<span class="k">for</span> <span class="p">(</span><span class="nx">rank</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">rank</span> <span class="o">&lt;</span> <span class="nx">blcodes</span><span class="p">;</span> <span class="nx">rank</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC896">				<span class="nx">send_bits</span><span class="p">(</span><span class="nx">bl_tree</span><span class="p">[</span><span class="nx">Tree</span><span class="p">.</span><span class="nx">bl_order</span><span class="p">[</span><span class="nx">rank</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">],</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC897">			<span class="p">}</span></div><div class="line" id="LC898">			<span class="nx">send_tree</span><span class="p">(</span><span class="nx">dyn_ltree</span><span class="p">,</span> <span class="nx">lcodes</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span> <span class="c1">// literal tree</span></div><div class="line" id="LC899">			<span class="nx">send_tree</span><span class="p">(</span><span class="nx">dyn_dtree</span><span class="p">,</span> <span class="nx">dcodes</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span> <span class="c1">// distance tree</span></div><div class="line" id="LC900">		<span class="p">}</span></div><div class="line" id="LC901"><br></div><div class="line" id="LC902">		<span class="c1">// Flush the bit buffer, keeping at most 7 bits in it.</span></div><div class="line" id="LC903">		<span class="kd">function</span> <span class="nx">bi_flush</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC904">			<span class="k">if</span> <span class="p">(</span><span class="nx">bi_valid</span> <span class="o">==</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC905">				<span class="nx">put_short</span><span class="p">(</span><span class="nx">bi_buf</span><span class="p">);</span></div><div class="line" id="LC906">				<span class="nx">bi_buf</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC907">				<span class="nx">bi_valid</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC908">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">bi_valid</span> <span class="o">&gt;=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC909">				<span class="nx">put_byte</span><span class="p">(</span><span class="nx">bi_buf</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC910">				<span class="nx">bi_buf</span> <span class="o">&gt;&gt;&gt;=</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC911">				<span class="nx">bi_valid</span> <span class="o">-=</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC912">			<span class="p">}</span></div><div class="line" id="LC913">		<span class="p">}</span></div><div class="line" id="LC914"><br></div><div class="line" id="LC915">		<span class="c1">// Send one empty static block to give enough lookahead for inflate.</span></div><div class="line" id="LC916">		<span class="c1">// This takes 10 bits, of which 7 may remain in the bit buffer.</span></div><div class="line" id="LC917">		<span class="c1">// The current inflate code requires 9 bits of lookahead. If the</span></div><div class="line" id="LC918">		<span class="c1">// last two codes for the previous block (real code plus EOB) were coded</span></div><div class="line" id="LC919">		<span class="c1">// on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode</span></div><div class="line" id="LC920">		<span class="c1">// the last real code. In this case we send two empty static blocks instead</span></div><div class="line" id="LC921">		<span class="c1">// of one. (There are no problems if the previous block is stored or fixed.)</span></div><div class="line" id="LC922">		<span class="c1">// To simplify the code, we assume the worst case of last real code encoded</span></div><div class="line" id="LC923">		<span class="c1">// on one bit only.</span></div><div class="line" id="LC924">		<span class="kd">function</span> <span class="nx">_tr_align</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC925">			<span class="nx">send_bits</span><span class="p">(</span><span class="nx">STATIC_TREES</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC926">			<span class="nx">send_code</span><span class="p">(</span><span class="nx">END_BLOCK</span><span class="p">,</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_ltree</span><span class="p">);</span></div><div class="line" id="LC927"><br></div><div class="line" id="LC928">			<span class="nx">bi_flush</span><span class="p">();</span></div><div class="line" id="LC929"><br></div><div class="line" id="LC930">			<span class="c1">// Of the 10 bits for the empty block, we have already sent</span></div><div class="line" id="LC931">			<span class="c1">// (10 - bi_valid) bits. The lookahead for the last real code (before</span></div><div class="line" id="LC932">			<span class="c1">// the EOB of the previous block) was thus at least one plus the length</span></div><div class="line" id="LC933">			<span class="c1">// of the EOB plus what we have just sent of the empty static block.</span></div><div class="line" id="LC934">			<span class="k">if</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nx">last_eob_len</span> <span class="o">+</span> <span class="mi">10</span> <span class="o">-</span> <span class="nx">bi_valid</span> <span class="o">&lt;</span> <span class="mi">9</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC935">				<span class="nx">send_bits</span><span class="p">(</span><span class="nx">STATIC_TREES</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC936">				<span class="nx">send_code</span><span class="p">(</span><span class="nx">END_BLOCK</span><span class="p">,</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_ltree</span><span class="p">);</span></div><div class="line" id="LC937">				<span class="nx">bi_flush</span><span class="p">();</span></div><div class="line" id="LC938">			<span class="p">}</span></div><div class="line" id="LC939">			<span class="nx">last_eob_len</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span></div><div class="line" id="LC940">		<span class="p">}</span></div><div class="line" id="LC941"><br></div><div class="line" id="LC942">		<span class="c1">// Save the match info and tally the frequency counts. Return true if</span></div><div class="line" id="LC943">		<span class="c1">// the current block must be flushed.</span></div><div class="line" id="LC944">		<span class="kd">function</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="nx">dist</span><span class="p">,</span> <span class="c1">// distance of matched string</span></div><div class="line" id="LC945">		<span class="nx">lc</span> <span class="c1">// match length-MIN_MATCH or unmatched char (if dist==0)</span></div><div class="line" id="LC946">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC947">			<span class="kd">var</span> <span class="nx">out_length</span><span class="p">,</span> <span class="nx">in_length</span><span class="p">,</span> <span class="nx">dcode</span><span class="p">;</span></div><div class="line" id="LC948">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">d_buf</span> <span class="o">+</span> <span class="nx">last_lit</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dist</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC949">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">d_buf</span> <span class="o">+</span> <span class="nx">last_lit</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">dist</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC950"><br></div><div class="line" id="LC951">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">l_buf</span> <span class="o">+</span> <span class="nx">last_lit</span><span class="p">]</span> <span class="o">=</span> <span class="nx">lc</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC952">			<span class="nx">last_lit</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC953"><br></div><div class="line" id="LC954">			<span class="k">if</span> <span class="p">(</span><span class="nx">dist</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC955">				<span class="c1">// lc is the unmatched char</span></div><div class="line" id="LC956">				<span class="nx">dyn_ltree</span><span class="p">[</span><span class="nx">lc</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC957">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC958">				<span class="nx">matches</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC959">				<span class="c1">// Here, lc is the match length - MIN_MATCH</span></div><div class="line" id="LC960">				<span class="nx">dist</span><span class="o">--</span><span class="p">;</span> <span class="c1">// dist = match distance - 1</span></div><div class="line" id="LC961">				<span class="nx">dyn_ltree</span><span class="p">[(</span><span class="nx">Tree</span><span class="p">.</span><span class="nx">_length_code</span><span class="p">[</span><span class="nx">lc</span><span class="p">]</span> <span class="o">+</span> <span class="nx">LITERALS</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC962">				<span class="nx">dyn_dtree</span><span class="p">[</span><span class="nx">Tree</span><span class="p">.</span><span class="nx">d_code</span><span class="p">(</span><span class="nx">dist</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC963">			<span class="p">}</span></div><div class="line" id="LC964"><br></div><div class="line" id="LC965">			<span class="k">if</span> <span class="p">((</span><span class="nx">last_lit</span> <span class="o">&amp;</span> <span class="mh">0x1fff</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">level</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC966">				<span class="c1">// Compute an upper bound for the compressed length</span></div><div class="line" id="LC967">				<span class="nx">out_length</span> <span class="o">=</span> <span class="nx">last_lit</span> <span class="o">*</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC968">				<span class="nx">in_length</span> <span class="o">=</span> <span class="nx">strstart</span> <span class="o">-</span> <span class="nx">block_start</span><span class="p">;</span></div><div class="line" id="LC969">				<span class="k">for</span> <span class="p">(</span><span class="nx">dcode</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">dcode</span> <span class="o">&lt;</span> <span class="nx">D_CODES</span><span class="p">;</span> <span class="nx">dcode</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC970">					<span class="nx">out_length</span> <span class="o">+=</span> <span class="nx">dyn_dtree</span><span class="p">[</span><span class="nx">dcode</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="mi">5</span> <span class="o">+</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_dbits</span><span class="p">[</span><span class="nx">dcode</span><span class="p">]);</span></div><div class="line" id="LC971">				<span class="p">}</span></div><div class="line" id="LC972">				<span class="nx">out_length</span> <span class="o">&gt;&gt;&gt;=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC973">				<span class="k">if</span> <span class="p">((</span><span class="nx">matches</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">last_lit</span> <span class="o">/</span> <span class="mi">2</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">out_length</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">in_length</span> <span class="o">/</span> <span class="mi">2</span><span class="p">))</span></div><div class="line" id="LC974">					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class="line" id="LC975">			<span class="p">}</span></div><div class="line" id="LC976"><br></div><div class="line" id="LC977">			<span class="k">return</span> <span class="p">(</span><span class="nx">last_lit</span> <span class="o">==</span> <span class="nx">lit_bufsize</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC978">			<span class="c1">// We avoid equality with lit_bufsize because of wraparound at 64K</span></div><div class="line" id="LC979">			<span class="c1">// on 16 bit machines and because stored blocks are restricted to</span></div><div class="line" id="LC980">			<span class="c1">// 64K-1 bytes.</span></div><div class="line" id="LC981">		<span class="p">}</span></div><div class="line" id="LC982"><br></div><div class="line" id="LC983">		<span class="c1">// Send the block data compressed using the given Huffman trees</span></div><div class="line" id="LC984">		<span class="kd">function</span> <span class="nx">compress_block</span><span class="p">(</span><span class="nx">ltree</span><span class="p">,</span> <span class="nx">dtree</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC985">			<span class="kd">var</span> <span class="nx">dist</span><span class="p">;</span> <span class="c1">// distance of matched string</span></div><div class="line" id="LC986">			<span class="kd">var</span> <span class="nx">lc</span><span class="p">;</span> <span class="c1">// match length or unmatched char (if dist === 0)</span></div><div class="line" id="LC987">			<span class="kd">var</span> <span class="nx">lx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// running index in l_buf</span></div><div class="line" id="LC988">			<span class="kd">var</span> <span class="nx">code</span><span class="p">;</span> <span class="c1">// the code to send</span></div><div class="line" id="LC989">			<span class="kd">var</span> <span class="nx">extra</span><span class="p">;</span> <span class="c1">// number of extra bits to send</span></div><div class="line" id="LC990"><br></div><div class="line" id="LC991">			<span class="k">if</span> <span class="p">(</span><span class="nx">last_lit</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC992">				<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC993">					<span class="nx">dist</span> <span class="o">=</span> <span class="p">((</span><span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">d_buf</span> <span class="o">+</span> <span class="nx">lx</span> <span class="o">*</span> <span class="mi">2</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff00</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">d_buf</span> <span class="o">+</span> <span class="nx">lx</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC994">					<span class="nx">lc</span> <span class="o">=</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">[</span><span class="nx">l_buf</span> <span class="o">+</span> <span class="nx">lx</span><span class="p">])</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC995">					<span class="nx">lx</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC996"><br></div><div class="line" id="LC997">					<span class="k">if</span> <span class="p">(</span><span class="nx">dist</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC998">						<span class="nx">send_code</span><span class="p">(</span><span class="nx">lc</span><span class="p">,</span> <span class="nx">ltree</span><span class="p">);</span> <span class="c1">// send a literal byte</span></div><div class="line" id="LC999">					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1000">						<span class="c1">// Here, lc is the match length - MIN_MATCH</span></div><div class="line" id="LC1001">						<span class="nx">code</span> <span class="o">=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">_length_code</span><span class="p">[</span><span class="nx">lc</span><span class="p">];</span></div><div class="line" id="LC1002"><br></div><div class="line" id="LC1003">						<span class="nx">send_code</span><span class="p">(</span><span class="nx">code</span> <span class="o">+</span> <span class="nx">LITERALS</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">ltree</span><span class="p">);</span> <span class="c1">// send the length</span></div><div class="line" id="LC1004">						<span class="c1">// code</span></div><div class="line" id="LC1005">						<span class="nx">extra</span> <span class="o">=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_lbits</span><span class="p">[</span><span class="nx">code</span><span class="p">];</span></div><div class="line" id="LC1006">						<span class="k">if</span> <span class="p">(</span><span class="nx">extra</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1007">							<span class="nx">lc</span> <span class="o">-=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">base_length</span><span class="p">[</span><span class="nx">code</span><span class="p">];</span></div><div class="line" id="LC1008">							<span class="nx">send_bits</span><span class="p">(</span><span class="nx">lc</span><span class="p">,</span> <span class="nx">extra</span><span class="p">);</span> <span class="c1">// send the extra length bits</span></div><div class="line" id="LC1009">						<span class="p">}</span></div><div class="line" id="LC1010">						<span class="nx">dist</span><span class="o">--</span><span class="p">;</span> <span class="c1">// dist is now the match distance - 1</span></div><div class="line" id="LC1011">						<span class="nx">code</span> <span class="o">=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">d_code</span><span class="p">(</span><span class="nx">dist</span><span class="p">);</span></div><div class="line" id="LC1012"><br></div><div class="line" id="LC1013">						<span class="nx">send_code</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">dtree</span><span class="p">);</span> <span class="c1">// send the distance code</span></div><div class="line" id="LC1014">						<span class="nx">extra</span> <span class="o">=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">extra_dbits</span><span class="p">[</span><span class="nx">code</span><span class="p">];</span></div><div class="line" id="LC1015">						<span class="k">if</span> <span class="p">(</span><span class="nx">extra</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1016">							<span class="nx">dist</span> <span class="o">-=</span> <span class="nx">Tree</span><span class="p">.</span><span class="nx">base_dist</span><span class="p">[</span><span class="nx">code</span><span class="p">];</span></div><div class="line" id="LC1017">							<span class="nx">send_bits</span><span class="p">(</span><span class="nx">dist</span><span class="p">,</span> <span class="nx">extra</span><span class="p">);</span> <span class="c1">// send the extra distance bits</span></div><div class="line" id="LC1018">						<span class="p">}</span></div><div class="line" id="LC1019">					<span class="p">}</span> <span class="c1">// literal or match pair ?</span></div><div class="line" id="LC1020"><br></div><div class="line" id="LC1021">					<span class="c1">// Check that the overlay between pending_buf and d_buf+l_buf is</span></div><div class="line" id="LC1022">					<span class="c1">// ok:</span></div><div class="line" id="LC1023">				<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">lx</span> <span class="o">&lt;</span> <span class="nx">last_lit</span><span class="p">);</span></div><div class="line" id="LC1024">			<span class="p">}</span></div><div class="line" id="LC1025"><br></div><div class="line" id="LC1026">			<span class="nx">send_code</span><span class="p">(</span><span class="nx">END_BLOCK</span><span class="p">,</span> <span class="nx">ltree</span><span class="p">);</span></div><div class="line" id="LC1027">			<span class="nx">last_eob_len</span> <span class="o">=</span> <span class="nx">ltree</span><span class="p">[</span><span class="nx">END_BLOCK</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC1028">		<span class="p">}</span></div><div class="line" id="LC1029"><br></div><div class="line" id="LC1030">		<span class="c1">// Flush the bit buffer and align the output on a byte boundary</span></div><div class="line" id="LC1031">		<span class="kd">function</span> <span class="nx">bi_windup</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1032">			<span class="k">if</span> <span class="p">(</span><span class="nx">bi_valid</span> <span class="o">&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1033">				<span class="nx">put_short</span><span class="p">(</span><span class="nx">bi_buf</span><span class="p">);</span></div><div class="line" id="LC1034">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">bi_valid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1035">				<span class="nx">put_byte</span><span class="p">(</span><span class="nx">bi_buf</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC1036">			<span class="p">}</span></div><div class="line" id="LC1037">			<span class="nx">bi_buf</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1038">			<span class="nx">bi_valid</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1039">		<span class="p">}</span></div><div class="line" id="LC1040"><br></div><div class="line" id="LC1041">		<span class="c1">// Copy a stored block, storing first the length and its</span></div><div class="line" id="LC1042">		<span class="c1">// one's complement if requested.</span></div><div class="line" id="LC1043">		<span class="kd">function</span> <span class="nx">copy_block</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="c1">// the input data</span></div><div class="line" id="LC1044">		<span class="nx">len</span><span class="p">,</span> <span class="c1">// its length</span></div><div class="line" id="LC1045">		<span class="nx">header</span> <span class="c1">// true if block header must be written</span></div><div class="line" id="LC1046">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1047">			<span class="nx">bi_windup</span><span class="p">();</span> <span class="c1">// align on byte boundary</span></div><div class="line" id="LC1048">			<span class="nx">last_eob_len</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span> <span class="c1">// enough lookahead for inflate</span></div><div class="line" id="LC1049"><br></div><div class="line" id="LC1050">			<span class="k">if</span> <span class="p">(</span><span class="nx">header</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1051">				<span class="nx">put_short</span><span class="p">(</span><span class="nx">len</span><span class="p">);</span></div><div class="line" id="LC1052">				<span class="nx">put_short</span><span class="p">(</span><span class="o">~</span><span class="nx">len</span><span class="p">);</span></div><div class="line" id="LC1053">			<span class="p">}</span></div><div class="line" id="LC1054"><br></div><div class="line" id="LC1055">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="nx">buf</span> <span class="o">+</span> <span class="nx">len</span><span class="p">),</span> <span class="nx">that</span><span class="p">.</span><span class="nx">pending</span><span class="p">);</span></div><div class="line" id="LC1056">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1057">		<span class="p">}</span></div><div class="line" id="LC1058"><br></div><div class="line" id="LC1059">		<span class="c1">// Send a stored block</span></div><div class="line" id="LC1060">		<span class="kd">function</span> <span class="nx">_tr_stored_block</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="c1">// input block</span></div><div class="line" id="LC1061">		<span class="nx">stored_len</span><span class="p">,</span> <span class="c1">// length of input block</span></div><div class="line" id="LC1062">		<span class="nx">eof</span> <span class="c1">// true if this is the last block for a file</span></div><div class="line" id="LC1063">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1064">			<span class="nx">send_bits</span><span class="p">((</span><span class="nx">STORED_BLOCK</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">eof</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">),</span> <span class="mi">3</span><span class="p">);</span> <span class="c1">// send block type</span></div><div class="line" id="LC1065">			<span class="nx">copy_block</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="nx">stored_len</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span> <span class="c1">// with header</span></div><div class="line" id="LC1066">		<span class="p">}</span></div><div class="line" id="LC1067"><br></div><div class="line" id="LC1068">		<span class="c1">// Determine the best encoding for the current block: dynamic trees, static</span></div><div class="line" id="LC1069">		<span class="c1">// trees or store, and output the encoded block to the zip file.</span></div><div class="line" id="LC1070">		<span class="kd">function</span> <span class="nx">_tr_flush_block</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="c1">// input block, or NULL if too old</span></div><div class="line" id="LC1071">		<span class="nx">stored_len</span><span class="p">,</span> <span class="c1">// length of input block</span></div><div class="line" id="LC1072">		<span class="nx">eof</span> <span class="c1">// true if this is the last block for a file</span></div><div class="line" id="LC1073">		<span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1074">			<span class="kd">var</span> <span class="nx">opt_lenb</span><span class="p">,</span> <span class="nx">static_lenb</span><span class="p">;</span><span class="c1">// opt_len and static_len in bytes</span></div><div class="line" id="LC1075">			<span class="kd">var</span> <span class="nx">max_blindex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// index of last bit length code of non zero freq</span></div><div class="line" id="LC1076"><br></div><div class="line" id="LC1077">			<span class="c1">// Build the Huffman trees unless a stored block is forced</span></div><div class="line" id="LC1078">			<span class="k">if</span> <span class="p">(</span><span class="nx">level</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1079">				<span class="c1">// Construct the literal and distance trees</span></div><div class="line" id="LC1080">				<span class="nx">l_desc</span><span class="p">.</span><span class="nx">build_tree</span><span class="p">(</span><span class="nx">that</span><span class="p">);</span></div><div class="line" id="LC1081"><br></div><div class="line" id="LC1082">				<span class="nx">d_desc</span><span class="p">.</span><span class="nx">build_tree</span><span class="p">(</span><span class="nx">that</span><span class="p">);</span></div><div class="line" id="LC1083"><br></div><div class="line" id="LC1084">				<span class="c1">// At this point, opt_len and static_len are the total bit lengths</span></div><div class="line" id="LC1085">				<span class="c1">// of</span></div><div class="line" id="LC1086">				<span class="c1">// the compressed block data, excluding the tree representations.</span></div><div class="line" id="LC1087"><br></div><div class="line" id="LC1088">				<span class="c1">// Build the bit length tree for the above two trees, and get the</span></div><div class="line" id="LC1089">				<span class="c1">// index</span></div><div class="line" id="LC1090">				<span class="c1">// in bl_order of the last bit length code to send.</span></div><div class="line" id="LC1091">				<span class="nx">max_blindex</span> <span class="o">=</span> <span class="nx">build_bl_tree</span><span class="p">();</span></div><div class="line" id="LC1092"><br></div><div class="line" id="LC1093">				<span class="c1">// Determine the best encoding. Compute first the block length in</span></div><div class="line" id="LC1094">				<span class="c1">// bytes</span></div><div class="line" id="LC1095">				<span class="nx">opt_lenb</span> <span class="o">=</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">opt_len</span> <span class="o">+</span> <span class="mi">3</span> <span class="o">+</span> <span class="mi">7</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC1096">				<span class="nx">static_lenb</span> <span class="o">=</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">static_len</span> <span class="o">+</span> <span class="mi">3</span> <span class="o">+</span> <span class="mi">7</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC1097"><br></div><div class="line" id="LC1098">				<span class="k">if</span> <span class="p">(</span><span class="nx">static_lenb</span> <span class="o">&lt;=</span> <span class="nx">opt_lenb</span><span class="p">)</span></div><div class="line" id="LC1099">					<span class="nx">opt_lenb</span> <span class="o">=</span> <span class="nx">static_lenb</span><span class="p">;</span></div><div class="line" id="LC1100">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1101">				<span class="nx">opt_lenb</span> <span class="o">=</span> <span class="nx">static_lenb</span> <span class="o">=</span> <span class="nx">stored_len</span> <span class="o">+</span> <span class="mi">5</span><span class="p">;</span> <span class="c1">// force a stored block</span></div><div class="line" id="LC1102">			<span class="p">}</span></div><div class="line" id="LC1103"><br></div><div class="line" id="LC1104">			<span class="k">if</span> <span class="p">((</span><span class="nx">stored_len</span> <span class="o">+</span> <span class="mi">4</span> <span class="o">&lt;=</span> <span class="nx">opt_lenb</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">buf</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1105">				<span class="c1">// 4: two words for the lengths</span></div><div class="line" id="LC1106">				<span class="c1">// The test buf != NULL is only necessary if LIT_BUFSIZE &gt; WSIZE.</span></div><div class="line" id="LC1107">				<span class="c1">// Otherwise we can't have processed more than WSIZE input bytes</span></div><div class="line" id="LC1108">				<span class="c1">// since</span></div><div class="line" id="LC1109">				<span class="c1">// the last block flush, because compression would have been</span></div><div class="line" id="LC1110">				<span class="c1">// successful. If LIT_BUFSIZE &lt;= WSIZE, it is never too late to</span></div><div class="line" id="LC1111">				<span class="c1">// transform a block into a stored block.</span></div><div class="line" id="LC1112">				<span class="nx">_tr_stored_block</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="nx">stored_len</span><span class="p">,</span> <span class="nx">eof</span><span class="p">);</span></div><div class="line" id="LC1113">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">static_lenb</span> <span class="o">==</span> <span class="nx">opt_lenb</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1114">				<span class="nx">send_bits</span><span class="p">((</span><span class="nx">STATIC_TREES</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">eof</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">),</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC1115">				<span class="nx">compress_block</span><span class="p">(</span><span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_ltree</span><span class="p">,</span> <span class="nx">StaticTree</span><span class="p">.</span><span class="nx">static_dtree</span><span class="p">);</span></div><div class="line" id="LC1116">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1117">				<span class="nx">send_bits</span><span class="p">((</span><span class="nx">DYN_TREES</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">eof</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">),</span> <span class="mi">3</span><span class="p">);</span></div><div class="line" id="LC1118">				<span class="nx">send_all_trees</span><span class="p">(</span><span class="nx">l_desc</span><span class="p">.</span><span class="nx">max_code</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">d_desc</span><span class="p">.</span><span class="nx">max_code</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">max_blindex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class="line" id="LC1119">				<span class="nx">compress_block</span><span class="p">(</span><span class="nx">dyn_ltree</span><span class="p">,</span> <span class="nx">dyn_dtree</span><span class="p">);</span></div><div class="line" id="LC1120">			<span class="p">}</span></div><div class="line" id="LC1121"><br></div><div class="line" id="LC1122">			<span class="c1">// The above check is made mod 2^32, for files larger than 512 MB</span></div><div class="line" id="LC1123">			<span class="c1">// and uLong implemented on 32 bits.</span></div><div class="line" id="LC1124"><br></div><div class="line" id="LC1125">			<span class="nx">init_block</span><span class="p">();</span></div><div class="line" id="LC1126"><br></div><div class="line" id="LC1127">			<span class="k">if</span> <span class="p">(</span><span class="nx">eof</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1128">				<span class="nx">bi_windup</span><span class="p">();</span></div><div class="line" id="LC1129">			<span class="p">}</span></div><div class="line" id="LC1130">		<span class="p">}</span></div><div class="line" id="LC1131"><br></div><div class="line" id="LC1132">		<span class="kd">function</span> <span class="nx">flush_block_only</span><span class="p">(</span><span class="nx">eof</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1133">			<span class="nx">_tr_flush_block</span><span class="p">(</span><span class="nx">block_start</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">block_start</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">strstart</span> <span class="o">-</span> <span class="nx">block_start</span><span class="p">,</span> <span class="nx">eof</span><span class="p">);</span></div><div class="line" id="LC1134">			<span class="nx">block_start</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span></div><div class="line" id="LC1135">			<span class="nx">strm</span><span class="p">.</span><span class="nx">flush_pending</span><span class="p">();</span></div><div class="line" id="LC1136">		<span class="p">}</span></div><div class="line" id="LC1137"><br></div><div class="line" id="LC1138">		<span class="c1">// Fill the window when the lookahead becomes insufficient.</span></div><div class="line" id="LC1139">		<span class="c1">// Updates strstart and lookahead.</span></div><div class="line" id="LC1140">		<span class="c1">//</span></div><div class="line" id="LC1141">		<span class="c1">// IN assertion: lookahead &lt; MIN_LOOKAHEAD</span></div><div class="line" id="LC1142">		<span class="c1">// OUT assertions: strstart &lt;= window_size-MIN_LOOKAHEAD</span></div><div class="line" id="LC1143">		<span class="c1">// At least one byte has been read, or avail_in === 0; reads are</span></div><div class="line" id="LC1144">		<span class="c1">// performed for at least two bytes (required for the zip translate_eol</span></div><div class="line" id="LC1145">		<span class="c1">// option -- not supported here).</span></div><div class="line" id="LC1146">		<span class="kd">function</span> <span class="nx">fill_window</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1147">			<span class="kd">var</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">m</span><span class="p">;</span></div><div class="line" id="LC1148">			<span class="kd">var</span> <span class="nx">p</span><span class="p">;</span></div><div class="line" id="LC1149">			<span class="kd">var</span> <span class="nx">more</span><span class="p">;</span> <span class="c1">// Amount of free space at the end of the window.</span></div><div class="line" id="LC1150"><br></div><div class="line" id="LC1151">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1152">				<span class="nx">more</span> <span class="o">=</span> <span class="p">(</span><span class="nx">window_size</span> <span class="o">-</span> <span class="nx">lookahead</span> <span class="o">-</span> <span class="nx">strstart</span><span class="p">);</span></div><div class="line" id="LC1153"><br></div><div class="line" id="LC1154">				<span class="c1">// Deal with !@#$% 64K limit:</span></div><div class="line" id="LC1155">				<span class="k">if</span> <span class="p">(</span><span class="nx">more</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">strstart</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">lookahead</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1156">					<span class="nx">more</span> <span class="o">=</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC1157">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">more</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1158">					<span class="c1">// Very unlikely, but possible on 16 bit machine if strstart ==</span></div><div class="line" id="LC1159">					<span class="c1">// 0</span></div><div class="line" id="LC1160">					<span class="c1">// and lookahead == 1 (input done one byte at time)</span></div><div class="line" id="LC1161">					<span class="nx">more</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC1162"><br></div><div class="line" id="LC1163">					<span class="c1">// If the window is almost full and there is insufficient</span></div><div class="line" id="LC1164">					<span class="c1">// lookahead,</span></div><div class="line" id="LC1165">					<span class="c1">// move the upper half to the lower one to make room in the</span></div><div class="line" id="LC1166">					<span class="c1">// upper half.</span></div><div class="line" id="LC1167">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">strstart</span> <span class="o">&gt;=</span> <span class="nx">w_size</span> <span class="o">+</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1168">					<span class="nb">window</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="nx">w_size</span><span class="p">,</span> <span class="nx">w_size</span> <span class="o">+</span> <span class="nx">w_size</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1169"><br></div><div class="line" id="LC1170">					<span class="nx">match_start</span> <span class="o">-=</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC1171">					<span class="nx">strstart</span> <span class="o">-=</span> <span class="nx">w_size</span><span class="p">;</span> <span class="c1">// we now have strstart &gt;= MAX_DIST</span></div><div class="line" id="LC1172">					<span class="nx">block_start</span> <span class="o">-=</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC1173"><br></div><div class="line" id="LC1174">					<span class="c1">// Slide the hash table (could be avoided with 32 bit values</span></div><div class="line" id="LC1175">					<span class="c1">// at the expense of memory usage). We slide even when level ==</span></div><div class="line" id="LC1176">					<span class="c1">// 0</span></div><div class="line" id="LC1177">					<span class="c1">// to keep the hash table consistent if we switch back to level</span></div><div class="line" id="LC1178">					<span class="c1">// &gt; 0</span></div><div class="line" id="LC1179">					<span class="c1">// later. (Using level 0 permanently is not an optimal usage of</span></div><div class="line" id="LC1180">					<span class="c1">// zlib, so we don't care about this pathological case.)</span></div><div class="line" id="LC1181"><br></div><div class="line" id="LC1182">					<span class="nx">n</span> <span class="o">=</span> <span class="nx">hash_size</span><span class="p">;</span></div><div class="line" id="LC1183">					<span class="nx">p</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class="line" id="LC1184">					<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1185">						<span class="nx">m</span> <span class="o">=</span> <span class="p">(</span><span class="nx">head</span><span class="p">[</span><span class="o">--</span><span class="nx">p</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1186">						<span class="nx">head</span><span class="p">[</span><span class="nx">p</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m</span> <span class="o">&gt;=</span> <span class="nx">w_size</span> <span class="o">?</span> <span class="nx">m</span> <span class="o">-</span> <span class="nx">w_size</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1187">					<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">n</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1188"><br></div><div class="line" id="LC1189">					<span class="nx">n</span> <span class="o">=</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC1190">					<span class="nx">p</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class="line" id="LC1191">					<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1192">						<span class="nx">m</span> <span class="o">=</span> <span class="p">(</span><span class="nx">prev</span><span class="p">[</span><span class="o">--</span><span class="nx">p</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1193">						<span class="nx">prev</span><span class="p">[</span><span class="nx">p</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m</span> <span class="o">&gt;=</span> <span class="nx">w_size</span> <span class="o">?</span> <span class="nx">m</span> <span class="o">-</span> <span class="nx">w_size</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1194">						<span class="c1">// If n is not on any hash chain, prev[n] is garbage but</span></div><div class="line" id="LC1195">						<span class="c1">// its value will never be used.</span></div><div class="line" id="LC1196">					<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">n</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1197">					<span class="nx">more</span> <span class="o">+=</span> <span class="nx">w_size</span><span class="p">;</span></div><div class="line" id="LC1198">				<span class="p">}</span></div><div class="line" id="LC1199"><br></div><div class="line" id="LC1200">				<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1201">					<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC1202"><br></div><div class="line" id="LC1203">				<span class="c1">// If there was no sliding:</span></div><div class="line" id="LC1204">				<span class="c1">// strstart &lt;= WSIZE+MAX_DIST-1 &amp;&amp; lookahead &lt;= MIN_LOOKAHEAD - 1 &amp;&amp;</span></div><div class="line" id="LC1205">				<span class="c1">// more == window_size - lookahead - strstart</span></div><div class="line" id="LC1206">				<span class="c1">// =&gt; more &gt;= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)</span></div><div class="line" id="LC1207">				<span class="c1">// =&gt; more &gt;= window_size - 2*WSIZE + 2</span></div><div class="line" id="LC1208">				<span class="c1">// In the BIG_MEM or MMAP case (not yet supported),</span></div><div class="line" id="LC1209">				<span class="c1">// window_size == input_size + MIN_LOOKAHEAD &amp;&amp;</span></div><div class="line" id="LC1210">				<span class="c1">// strstart + s-&gt;lookahead &lt;= input_size =&gt; more &gt;= MIN_LOOKAHEAD.</span></div><div class="line" id="LC1211">				<span class="c1">// Otherwise, window_size == 2*WSIZE so more &gt;= 2.</span></div><div class="line" id="LC1212">				<span class="c1">// If there was sliding, more &gt;= WSIZE. So in all cases, more &gt;= 2.</span></div><div class="line" id="LC1213"><br></div><div class="line" id="LC1214">				<span class="nx">n</span> <span class="o">=</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">read_buf</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nx">strstart</span> <span class="o">+</span> <span class="nx">lookahead</span><span class="p">,</span> <span class="nx">more</span><span class="p">);</span></div><div class="line" id="LC1215">				<span class="nx">lookahead</span> <span class="o">+=</span> <span class="nx">n</span><span class="p">;</span></div><div class="line" id="LC1216"><br></div><div class="line" id="LC1217">				<span class="c1">// Initialize the hash value now that we have some input:</span></div><div class="line" id="LC1218">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1219">					<span class="nx">ins_h</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC1220">					<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1221">				<span class="p">}</span></div><div class="line" id="LC1222">				<span class="c1">// If the whole input has less than MIN_MATCH bytes, ins_h is</span></div><div class="line" id="LC1223">				<span class="c1">// garbage,</span></div><div class="line" id="LC1224">				<span class="c1">// but this is not important since only literal bytes will be</span></div><div class="line" id="LC1225">				<span class="c1">// emitted.</span></div><div class="line" id="LC1226">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;</span> <span class="nx">MIN_LOOKAHEAD</span> <span class="o">&amp;&amp;</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1227">		<span class="p">}</span></div><div class="line" id="LC1228"><br></div><div class="line" id="LC1229">		<span class="c1">// Copy without compression as much as possible from the input stream,</span></div><div class="line" id="LC1230">		<span class="c1">// return</span></div><div class="line" id="LC1231">		<span class="c1">// the current block state.</span></div><div class="line" id="LC1232">		<span class="c1">// This function does not insert new strings in the dictionary since</span></div><div class="line" id="LC1233">		<span class="c1">// uncompressible data is probably not useful. This function is used</span></div><div class="line" id="LC1234">		<span class="c1">// only for the level=0 compression option.</span></div><div class="line" id="LC1235">		<span class="c1">// NOTE: this function should be optimized to avoid extra copying from</span></div><div class="line" id="LC1236">		<span class="c1">// window to pending_buf.</span></div><div class="line" id="LC1237">		<span class="kd">function</span> <span class="nx">deflate_stored</span><span class="p">(</span><span class="nx">flush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1238">			<span class="c1">// Stored blocks are limited to 0xffff bytes, pending_buf is limited</span></div><div class="line" id="LC1239">			<span class="c1">// to pending_buf_size, and each stored block has a 5 byte header:</span></div><div class="line" id="LC1240"><br></div><div class="line" id="LC1241">			<span class="kd">var</span> <span class="nx">max_block_size</span> <span class="o">=</span> <span class="mh">0xffff</span><span class="p">;</span></div><div class="line" id="LC1242">			<span class="kd">var</span> <span class="nx">max_start</span><span class="p">;</span></div><div class="line" id="LC1243"><br></div><div class="line" id="LC1244">			<span class="k">if</span> <span class="p">(</span><span class="nx">max_block_size</span> <span class="o">&gt;</span> <span class="nx">pending_buf_size</span> <span class="o">-</span> <span class="mi">5</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1245">				<span class="nx">max_block_size</span> <span class="o">=</span> <span class="nx">pending_buf_size</span> <span class="o">-</span> <span class="mi">5</span><span class="p">;</span></div><div class="line" id="LC1246">			<span class="p">}</span></div><div class="line" id="LC1247"><br></div><div class="line" id="LC1248">			<span class="c1">// Copy as much as possible from input to output:</span></div><div class="line" id="LC1249">			<span class="k">while</span> <span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1250">				<span class="c1">// Fill the window as much as possible:</span></div><div class="line" id="LC1251">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1252">					<span class="nx">fill_window</span><span class="p">();</span></div><div class="line" id="LC1253">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_NO_FLUSH</span><span class="p">)</span></div><div class="line" id="LC1254">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1255">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1256">						<span class="k">break</span><span class="p">;</span> <span class="c1">// flush the current block</span></div><div class="line" id="LC1257">				<span class="p">}</span></div><div class="line" id="LC1258"><br></div><div class="line" id="LC1259">				<span class="nx">strstart</span> <span class="o">+=</span> <span class="nx">lookahead</span><span class="p">;</span></div><div class="line" id="LC1260">				<span class="nx">lookahead</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1261"><br></div><div class="line" id="LC1262">				<span class="c1">// Emit a stored block if pending_buf will be full:</span></div><div class="line" id="LC1263">				<span class="nx">max_start</span> <span class="o">=</span> <span class="nx">block_start</span> <span class="o">+</span> <span class="nx">max_block_size</span><span class="p">;</span></div><div class="line" id="LC1264">				<span class="k">if</span> <span class="p">(</span><span class="nx">strstart</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">strstart</span> <span class="o">&gt;=</span> <span class="nx">max_start</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1265">					<span class="c1">// strstart === 0 is possible when wraparound on 16-bit machine</span></div><div class="line" id="LC1266">					<span class="nx">lookahead</span> <span class="o">=</span> <span class="p">(</span><span class="nx">strstart</span> <span class="o">-</span> <span class="nx">max_start</span><span class="p">);</span></div><div class="line" id="LC1267">					<span class="nx">strstart</span> <span class="o">=</span> <span class="nx">max_start</span><span class="p">;</span></div><div class="line" id="LC1268"><br></div><div class="line" id="LC1269">					<span class="nx">flush_block_only</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1270">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1271">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1272"><br></div><div class="line" id="LC1273">				<span class="p">}</span></div><div class="line" id="LC1274"><br></div><div class="line" id="LC1275">				<span class="c1">// Flush if we may have to slide, otherwise block_start may become</span></div><div class="line" id="LC1276">				<span class="c1">// negative and the data will be gone:</span></div><div class="line" id="LC1277">				<span class="k">if</span> <span class="p">(</span><span class="nx">strstart</span> <span class="o">-</span> <span class="nx">block_start</span> <span class="o">&gt;=</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1278">					<span class="nx">flush_block_only</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1279">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1280">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1281">				<span class="p">}</span></div><div class="line" id="LC1282">			<span class="p">}</span></div><div class="line" id="LC1283"><br></div><div class="line" id="LC1284">			<span class="nx">flush_block_only</span><span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">);</span></div><div class="line" id="LC1285">			<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1286">				<span class="k">return</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">)</span> <span class="o">?</span> <span class="nx">FinishStarted</span> <span class="o">:</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1287"><br></div><div class="line" id="LC1288">			<span class="k">return</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span> <span class="o">?</span> <span class="nx">FinishDone</span> <span class="o">:</span> <span class="nx">BlockDone</span><span class="p">;</span></div><div class="line" id="LC1289">		<span class="p">}</span></div><div class="line" id="LC1290"><br></div><div class="line" id="LC1291">		<span class="kd">function</span> <span class="nx">longest_match</span><span class="p">(</span><span class="nx">cur_match</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1292">			<span class="kd">var</span> <span class="nx">chain_length</span> <span class="o">=</span> <span class="nx">max_chain_length</span><span class="p">;</span> <span class="c1">// max hash chain length</span></div><div class="line" id="LC1293">			<span class="kd">var</span> <span class="nx">scan</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span> <span class="c1">// current string</span></div><div class="line" id="LC1294">			<span class="kd">var</span> <span class="nx">match</span><span class="p">;</span> <span class="c1">// matched string</span></div><div class="line" id="LC1295">			<span class="kd">var</span> <span class="nx">len</span><span class="p">;</span> <span class="c1">// length of current match</span></div><div class="line" id="LC1296">			<span class="kd">var</span> <span class="nx">best_len</span> <span class="o">=</span> <span class="nx">prev_length</span><span class="p">;</span> <span class="c1">// best match length so far</span></div><div class="line" id="LC1297">			<span class="kd">var</span> <span class="nx">limit</span> <span class="o">=</span> <span class="nx">strstart</span> <span class="o">&gt;</span> <span class="p">(</span><span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="o">?</span> <span class="nx">strstart</span> <span class="o">-</span> <span class="p">(</span><span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1298">			<span class="kd">var</span> <span class="nx">_nice_match</span> <span class="o">=</span> <span class="nx">nice_match</span><span class="p">;</span></div><div class="line" id="LC1299"><br></div><div class="line" id="LC1300">			<span class="c1">// Stop when cur_match becomes &lt;= limit. To simplify the code,</span></div><div class="line" id="LC1301">			<span class="c1">// we prevent matches with the string of window index 0.</span></div><div class="line" id="LC1302"><br></div><div class="line" id="LC1303">			<span class="kd">var</span> <span class="nx">wmask</span> <span class="o">=</span> <span class="nx">w_mask</span><span class="p">;</span></div><div class="line" id="LC1304"><br></div><div class="line" id="LC1305">			<span class="kd">var</span> <span class="nx">strend</span> <span class="o">=</span> <span class="nx">strstart</span> <span class="o">+</span> <span class="nx">MAX_MATCH</span><span class="p">;</span></div><div class="line" id="LC1306">			<span class="kd">var</span> <span class="nx">scan_end1</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span> <span class="o">+</span> <span class="nx">best_len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC1307">			<span class="kd">var</span> <span class="nx">scan_end</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span> <span class="o">+</span> <span class="nx">best_len</span><span class="p">];</span></div><div class="line" id="LC1308"><br></div><div class="line" id="LC1309">			<span class="c1">// The code is optimized for HASH_BITS &gt;= 8 and MAX_MATCH-2 multiple of</span></div><div class="line" id="LC1310">			<span class="c1">// 16.</span></div><div class="line" id="LC1311">			<span class="c1">// It is easy to get rid of this optimization if necessary.</span></div><div class="line" id="LC1312"><br></div><div class="line" id="LC1313">			<span class="c1">// Do not waste too much time if we already have a good match:</span></div><div class="line" id="LC1314">			<span class="k">if</span> <span class="p">(</span><span class="nx">prev_length</span> <span class="o">&gt;=</span> <span class="nx">good_match</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1315">				<span class="nx">chain_length</span> <span class="o">&gt;&gt;=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC1316">			<span class="p">}</span></div><div class="line" id="LC1317"><br></div><div class="line" id="LC1318">			<span class="c1">// Do not look for matches beyond the end of the input. This is</span></div><div class="line" id="LC1319">			<span class="c1">// necessary</span></div><div class="line" id="LC1320">			<span class="c1">// to make deflate deterministic.</span></div><div class="line" id="LC1321">			<span class="k">if</span> <span class="p">(</span><span class="nx">_nice_match</span> <span class="o">&gt;</span> <span class="nx">lookahead</span><span class="p">)</span></div><div class="line" id="LC1322">				<span class="nx">_nice_match</span> <span class="o">=</span> <span class="nx">lookahead</span><span class="p">;</span></div><div class="line" id="LC1323"><br></div><div class="line" id="LC1324">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1325">				<span class="nx">match</span> <span class="o">=</span> <span class="nx">cur_match</span><span class="p">;</span></div><div class="line" id="LC1326"><br></div><div class="line" id="LC1327">				<span class="c1">// Skip to next match if the match length cannot increase</span></div><div class="line" id="LC1328">				<span class="c1">// or if the match length is less than 2:</span></div><div class="line" id="LC1329">				<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">[</span><span class="nx">match</span> <span class="o">+</span> <span class="nx">best_len</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">scan_end</span> <span class="o">||</span> <span class="nb">window</span><span class="p">[</span><span class="nx">match</span> <span class="o">+</span> <span class="nx">best_len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">scan_end1</span> <span class="o">||</span> <span class="nb">window</span><span class="p">[</span><span class="nx">match</span><span class="p">]</span> <span class="o">!=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span><span class="p">]</span></div><div class="line" id="LC1330">						<span class="o">||</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">!=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span> <span class="o">+</span> <span class="mi">1</span><span class="p">])</span></div><div class="line" id="LC1331">					<span class="k">continue</span><span class="p">;</span></div><div class="line" id="LC1332"><br></div><div class="line" id="LC1333">				<span class="c1">// The check at best_len-1 can be removed because it will be made</span></div><div class="line" id="LC1334">				<span class="c1">// again later. (This heuristic is not always a win.)</span></div><div class="line" id="LC1335">				<span class="c1">// It is not necessary to compare scan[2] and match[2] since they</span></div><div class="line" id="LC1336">				<span class="c1">// are always equal when the other bytes match, given that</span></div><div class="line" id="LC1337">				<span class="c1">// the hash keys are equal and that HASH_BITS &gt;= 8.</span></div><div class="line" id="LC1338">				<span class="nx">scan</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC1339">				<span class="nx">match</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1340"><br></div><div class="line" id="LC1341">				<span class="c1">// We check for insufficient lookahead only every 8th comparison;</span></div><div class="line" id="LC1342">				<span class="c1">// the 256th check will be made at strstart+258.</span></div><div class="line" id="LC1343">				<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1344">				<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span></div><div class="line" id="LC1345">						<span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span></div><div class="line" id="LC1346">						<span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">scan</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">[</span><span class="o">++</span><span class="nx">match</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">scan</span> <span class="o">&lt;</span> <span class="nx">strend</span><span class="p">);</span></div><div class="line" id="LC1347"><br></div><div class="line" id="LC1348">				<span class="nx">len</span> <span class="o">=</span> <span class="nx">MAX_MATCH</span> <span class="o">-</span> <span class="p">(</span><span class="nx">strend</span> <span class="o">-</span> <span class="nx">scan</span><span class="p">);</span></div><div class="line" id="LC1349">				<span class="nx">scan</span> <span class="o">=</span> <span class="nx">strend</span> <span class="o">-</span> <span class="nx">MAX_MATCH</span><span class="p">;</span></div><div class="line" id="LC1350"><br></div><div class="line" id="LC1351">				<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="nx">best_len</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1352">					<span class="nx">match_start</span> <span class="o">=</span> <span class="nx">cur_match</span><span class="p">;</span></div><div class="line" id="LC1353">					<span class="nx">best_len</span> <span class="o">=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1354">					<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;=</span> <span class="nx">_nice_match</span><span class="p">)</span></div><div class="line" id="LC1355">						<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC1356">					<span class="nx">scan_end1</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span> <span class="o">+</span> <span class="nx">best_len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC1357">					<span class="nx">scan_end</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">scan</span> <span class="o">+</span> <span class="nx">best_len</span><span class="p">];</span></div><div class="line" id="LC1358">				<span class="p">}</span></div><div class="line" id="LC1359"><br></div><div class="line" id="LC1360">			<span class="p">}</span> <span class="k">while</span> <span class="p">((</span><span class="nx">cur_match</span> <span class="o">=</span> <span class="p">(</span><span class="nx">prev</span><span class="p">[</span><span class="nx">cur_match</span> <span class="o">&amp;</span> <span class="nx">wmask</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">))</span> <span class="o">&gt;</span> <span class="nx">limit</span> <span class="o">&amp;&amp;</span> <span class="o">--</span><span class="nx">chain_length</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1361"><br></div><div class="line" id="LC1362">			<span class="k">if</span> <span class="p">(</span><span class="nx">best_len</span> <span class="o">&lt;=</span> <span class="nx">lookahead</span><span class="p">)</span></div><div class="line" id="LC1363">				<span class="k">return</span> <span class="nx">best_len</span><span class="p">;</span></div><div class="line" id="LC1364">			<span class="k">return</span> <span class="nx">lookahead</span><span class="p">;</span></div><div class="line" id="LC1365">		<span class="p">}</span></div><div class="line" id="LC1366"><br></div><div class="line" id="LC1367">		<span class="c1">// Compress as much as possible from the input stream, return the current</span></div><div class="line" id="LC1368">		<span class="c1">// block state.</span></div><div class="line" id="LC1369">		<span class="c1">// This function does not perform lazy evaluation of matches and inserts</span></div><div class="line" id="LC1370">		<span class="c1">// new strings in the dictionary only for unmatched strings or for short</span></div><div class="line" id="LC1371">		<span class="c1">// matches. It is used only for the fast compression options.</span></div><div class="line" id="LC1372">		<span class="kd">function</span> <span class="nx">deflate_fast</span><span class="p">(</span><span class="nx">flush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1373">			<span class="c1">// short hash_head = 0; // head of the hash chain</span></div><div class="line" id="LC1374">			<span class="kd">var</span> <span class="nx">hash_head</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// head of the hash chain</span></div><div class="line" id="LC1375">			<span class="kd">var</span> <span class="nx">bflush</span><span class="p">;</span> <span class="c1">// set if current block must be flushed</span></div><div class="line" id="LC1376"><br></div><div class="line" id="LC1377">			<span class="k">while</span> <span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1378">				<span class="c1">// Make sure that we always have enough lookahead, except</span></div><div class="line" id="LC1379">				<span class="c1">// at the end of the input file. We need MAX_MATCH bytes</span></div><div class="line" id="LC1380">				<span class="c1">// for the next match, plus MIN_MATCH bytes to insert the</span></div><div class="line" id="LC1381">				<span class="c1">// string following the next match.</span></div><div class="line" id="LC1382">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1383">					<span class="nx">fill_window</span><span class="p">();</span></div><div class="line" id="LC1384">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;</span> <span class="nx">MIN_LOOKAHEAD</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_NO_FLUSH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1385">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1386">					<span class="p">}</span></div><div class="line" id="LC1387">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1388">						<span class="k">break</span><span class="p">;</span> <span class="c1">// flush the current block</span></div><div class="line" id="LC1389">				<span class="p">}</span></div><div class="line" id="LC1390"><br></div><div class="line" id="LC1391">				<span class="c1">// Insert the string window[strstart .. strstart+2] in the</span></div><div class="line" id="LC1392">				<span class="c1">// dictionary, and set hash_head to the head of the hash chain:</span></div><div class="line" id="LC1393">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1394">					<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[(</span><span class="nx">strstart</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1395"><br></div><div class="line" id="LC1396">					<span class="c1">// prev[strstart&amp;w_mask]=hash_head=head[ins_h];</span></div><div class="line" id="LC1397">					<span class="nx">hash_head</span> <span class="o">=</span> <span class="p">(</span><span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1398">					<span class="nx">prev</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">&amp;</span> <span class="nx">w_mask</span><span class="p">]</span> <span class="o">=</span> <span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">];</span></div><div class="line" id="LC1399">					<span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span></div><div class="line" id="LC1400">				<span class="p">}</span></div><div class="line" id="LC1401"><br></div><div class="line" id="LC1402">				<span class="c1">// Find the longest match, discarding those &lt;= prev_length.</span></div><div class="line" id="LC1403">				<span class="c1">// At this point we have always match_length &lt; MIN_MATCH</span></div><div class="line" id="LC1404"><br></div><div class="line" id="LC1405">				<span class="k">if</span> <span class="p">(</span><span class="nx">hash_head</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">((</span><span class="nx">strstart</span> <span class="o">-</span> <span class="nx">hash_head</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1406">					<span class="c1">// To simplify the code, we prevent matches with the string</span></div><div class="line" id="LC1407">					<span class="c1">// of window index 0 (in particular we have to avoid a match</span></div><div class="line" id="LC1408">					<span class="c1">// of the string with itself at the start of the input file).</span></div><div class="line" id="LC1409">					<span class="k">if</span> <span class="p">(</span><span class="nx">strategy</span> <span class="o">!=</span> <span class="nx">Z_HUFFMAN_ONLY</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1410">						<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">longest_match</span><span class="p">(</span><span class="nx">hash_head</span><span class="p">);</span></div><div class="line" id="LC1411">					<span class="p">}</span></div><div class="line" id="LC1412">					<span class="c1">// longest_match() sets match_start</span></div><div class="line" id="LC1413">				<span class="p">}</span></div><div class="line" id="LC1414">				<span class="k">if</span> <span class="p">(</span><span class="nx">match_length</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1415">					<span class="c1">// check_match(strstart, match_start, match_length);</span></div><div class="line" id="LC1416"><br></div><div class="line" id="LC1417">					<span class="nx">bflush</span> <span class="o">=</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="nx">strstart</span> <span class="o">-</span> <span class="nx">match_start</span><span class="p">,</span> <span class="nx">match_length</span> <span class="o">-</span> <span class="nx">MIN_MATCH</span><span class="p">);</span></div><div class="line" id="LC1418"><br></div><div class="line" id="LC1419">					<span class="nx">lookahead</span> <span class="o">-=</span> <span class="nx">match_length</span><span class="p">;</span></div><div class="line" id="LC1420"><br></div><div class="line" id="LC1421">					<span class="c1">// Insert new strings in the hash table only if the match length</span></div><div class="line" id="LC1422">					<span class="c1">// is not too large. This saves time but degrades compression.</span></div><div class="line" id="LC1423">					<span class="k">if</span> <span class="p">(</span><span class="nx">match_length</span> <span class="o">&lt;=</span> <span class="nx">max_lazy_match</span> <span class="o">&amp;&amp;</span> <span class="nx">lookahead</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1424">						<span class="nx">match_length</span><span class="o">--</span><span class="p">;</span> <span class="c1">// string at strstart already in hash table</span></div><div class="line" id="LC1425">						<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1426">							<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1427"><br></div><div class="line" id="LC1428">							<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">((</span><span class="nx">ins_h</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[(</span><span class="nx">strstart</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1429">							<span class="c1">// prev[strstart&amp;w_mask]=hash_head=head[ins_h];</span></div><div class="line" id="LC1430">							<span class="nx">hash_head</span> <span class="o">=</span> <span class="p">(</span><span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1431">							<span class="nx">prev</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">&amp;</span> <span class="nx">w_mask</span><span class="p">]</span> <span class="o">=</span> <span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">];</span></div><div class="line" id="LC1432">							<span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span></div><div class="line" id="LC1433"><br></div><div class="line" id="LC1434">							<span class="c1">// strstart never exceeds WSIZE-MAX_MATCH, so there are</span></div><div class="line" id="LC1435">							<span class="c1">// always MIN_MATCH bytes ahead.</span></div><div class="line" id="LC1436">						<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">match_length</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1437">						<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1438">					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1439">						<span class="nx">strstart</span> <span class="o">+=</span> <span class="nx">match_length</span><span class="p">;</span></div><div class="line" id="LC1440">						<span class="nx">match_length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1441">						<span class="nx">ins_h</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC1442"><br></div><div class="line" id="LC1443">						<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1444">						<span class="c1">// If lookahead &lt; MIN_MATCH, ins_h is garbage, but it does</span></div><div class="line" id="LC1445">						<span class="c1">// not</span></div><div class="line" id="LC1446">						<span class="c1">// matter since it will be recomputed at next deflate call.</span></div><div class="line" id="LC1447">					<span class="p">}</span></div><div class="line" id="LC1448">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1449">					<span class="c1">// No match, output a literal byte</span></div><div class="line" id="LC1450"><br></div><div class="line" id="LC1451">					<span class="nx">bflush</span> <span class="o">=</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC1452">					<span class="nx">lookahead</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC1453">					<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1454">				<span class="p">}</span></div><div class="line" id="LC1455">				<span class="k">if</span> <span class="p">(</span><span class="nx">bflush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1456"><br></div><div class="line" id="LC1457">					<span class="nx">flush_block_only</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1458">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1459">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1460">				<span class="p">}</span></div><div class="line" id="LC1461">			<span class="p">}</span></div><div class="line" id="LC1462"><br></div><div class="line" id="LC1463">			<span class="nx">flush_block_only</span><span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">);</span></div><div class="line" id="LC1464">			<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1465">				<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">)</span></div><div class="line" id="LC1466">					<span class="k">return</span> <span class="nx">FinishStarted</span><span class="p">;</span></div><div class="line" id="LC1467">				<span class="k">else</span></div><div class="line" id="LC1468">					<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1469">			<span class="p">}</span></div><div class="line" id="LC1470">			<span class="k">return</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span> <span class="o">?</span> <span class="nx">FinishDone</span> <span class="o">:</span> <span class="nx">BlockDone</span><span class="p">;</span></div><div class="line" id="LC1471">		<span class="p">}</span></div><div class="line" id="LC1472"><br></div><div class="line" id="LC1473">		<span class="c1">// Same as above, but achieves better compression. We use a lazy</span></div><div class="line" id="LC1474">		<span class="c1">// evaluation for matches: a match is finally adopted only if there is</span></div><div class="line" id="LC1475">		<span class="c1">// no better match at the next window position.</span></div><div class="line" id="LC1476">		<span class="kd">function</span> <span class="nx">deflate_slow</span><span class="p">(</span><span class="nx">flush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1477">			<span class="c1">// short hash_head = 0; // head of hash chain</span></div><div class="line" id="LC1478">			<span class="kd">var</span> <span class="nx">hash_head</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// head of hash chain</span></div><div class="line" id="LC1479">			<span class="kd">var</span> <span class="nx">bflush</span><span class="p">;</span> <span class="c1">// set if current block must be flushed</span></div><div class="line" id="LC1480">			<span class="kd">var</span> <span class="nx">max_insert</span><span class="p">;</span></div><div class="line" id="LC1481"><br></div><div class="line" id="LC1482">			<span class="c1">// Process the input block.</span></div><div class="line" id="LC1483">			<span class="k">while</span> <span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1484">				<span class="c1">// Make sure that we always have enough lookahead, except</span></div><div class="line" id="LC1485">				<span class="c1">// at the end of the input file. We need MAX_MATCH bytes</span></div><div class="line" id="LC1486">				<span class="c1">// for the next match, plus MIN_MATCH bytes to insert the</span></div><div class="line" id="LC1487">				<span class="c1">// string following the next match.</span></div><div class="line" id="LC1488"><br></div><div class="line" id="LC1489">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1490">					<span class="nx">fill_window</span><span class="p">();</span></div><div class="line" id="LC1491">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&lt;</span> <span class="nx">MIN_LOOKAHEAD</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_NO_FLUSH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1492">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1493">					<span class="p">}</span></div><div class="line" id="LC1494">					<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1495">						<span class="k">break</span><span class="p">;</span> <span class="c1">// flush the current block</span></div><div class="line" id="LC1496">				<span class="p">}</span></div><div class="line" id="LC1497"><br></div><div class="line" id="LC1498">				<span class="c1">// Insert the string window[strstart .. strstart+2] in the</span></div><div class="line" id="LC1499">				<span class="c1">// dictionary, and set hash_head to the head of the hash chain:</span></div><div class="line" id="LC1500"><br></div><div class="line" id="LC1501">				<span class="k">if</span> <span class="p">(</span><span class="nx">lookahead</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1502">					<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[(</span><span class="nx">strstart</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1503">					<span class="c1">// prev[strstart&amp;w_mask]=hash_head=head[ins_h];</span></div><div class="line" id="LC1504">					<span class="nx">hash_head</span> <span class="o">=</span> <span class="p">(</span><span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1505">					<span class="nx">prev</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">&amp;</span> <span class="nx">w_mask</span><span class="p">]</span> <span class="o">=</span> <span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">];</span></div><div class="line" id="LC1506">					<span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span></div><div class="line" id="LC1507">				<span class="p">}</span></div><div class="line" id="LC1508"><br></div><div class="line" id="LC1509">				<span class="c1">// Find the longest match, discarding those &lt;= prev_length.</span></div><div class="line" id="LC1510">				<span class="nx">prev_length</span> <span class="o">=</span> <span class="nx">match_length</span><span class="p">;</span></div><div class="line" id="LC1511">				<span class="nx">prev_match</span> <span class="o">=</span> <span class="nx">match_start</span><span class="p">;</span></div><div class="line" id="LC1512">				<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1513"><br></div><div class="line" id="LC1514">				<span class="k">if</span> <span class="p">(</span><span class="nx">hash_head</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">prev_length</span> <span class="o">&lt;</span> <span class="nx">max_lazy_match</span> <span class="o">&amp;&amp;</span> <span class="p">((</span><span class="nx">strstart</span> <span class="o">-</span> <span class="nx">hash_head</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1515">					<span class="c1">// To simplify the code, we prevent matches with the string</span></div><div class="line" id="LC1516">					<span class="c1">// of window index 0 (in particular we have to avoid a match</span></div><div class="line" id="LC1517">					<span class="c1">// of the string with itself at the start of the input file).</span></div><div class="line" id="LC1518"><br></div><div class="line" id="LC1519">					<span class="k">if</span> <span class="p">(</span><span class="nx">strategy</span> <span class="o">!=</span> <span class="nx">Z_HUFFMAN_ONLY</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1520">						<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">longest_match</span><span class="p">(</span><span class="nx">hash_head</span><span class="p">);</span></div><div class="line" id="LC1521">					<span class="p">}</span></div><div class="line" id="LC1522">					<span class="c1">// longest_match() sets match_start</span></div><div class="line" id="LC1523"><br></div><div class="line" id="LC1524">					<span class="k">if</span> <span class="p">(</span><span class="nx">match_length</span> <span class="o">&lt;=</span> <span class="mi">5</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">strategy</span> <span class="o">==</span> <span class="nx">Z_FILTERED</span> <span class="o">||</span> <span class="p">(</span><span class="nx">match_length</span> <span class="o">==</span> <span class="nx">MIN_MATCH</span> <span class="o">&amp;&amp;</span> <span class="nx">strstart</span> <span class="o">-</span> <span class="nx">match_start</span> <span class="o">&gt;</span> <span class="mi">4096</span><span class="p">)))</span> <span class="p">{</span></div><div class="line" id="LC1525"><br></div><div class="line" id="LC1526">						<span class="c1">// If prev_match is also MIN_MATCH, match_start is garbage</span></div><div class="line" id="LC1527">						<span class="c1">// but we will ignore the current match anyway.</span></div><div class="line" id="LC1528">						<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1529">					<span class="p">}</span></div><div class="line" id="LC1530">				<span class="p">}</span></div><div class="line" id="LC1531"><br></div><div class="line" id="LC1532">				<span class="c1">// If there was a match at the previous step and the current</span></div><div class="line" id="LC1533">				<span class="c1">// match is not better, output the previous match:</span></div><div class="line" id="LC1534">				<span class="k">if</span> <span class="p">(</span><span class="nx">prev_length</span> <span class="o">&gt;=</span> <span class="nx">MIN_MATCH</span> <span class="o">&amp;&amp;</span> <span class="nx">match_length</span> <span class="o">&lt;=</span> <span class="nx">prev_length</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1535">					<span class="nx">max_insert</span> <span class="o">=</span> <span class="nx">strstart</span> <span class="o">+</span> <span class="nx">lookahead</span> <span class="o">-</span> <span class="nx">MIN_MATCH</span><span class="p">;</span></div><div class="line" id="LC1536">					<span class="c1">// Do not insert strings in hash table beyond this.</span></div><div class="line" id="LC1537"><br></div><div class="line" id="LC1538">					<span class="c1">// check_match(strstart-1, prev_match, prev_length);</span></div><div class="line" id="LC1539"><br></div><div class="line" id="LC1540">					<span class="nx">bflush</span> <span class="o">=</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="nx">strstart</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">-</span> <span class="nx">prev_match</span><span class="p">,</span> <span class="nx">prev_length</span> <span class="o">-</span> <span class="nx">MIN_MATCH</span><span class="p">);</span></div><div class="line" id="LC1541"><br></div><div class="line" id="LC1542">					<span class="c1">// Insert in hash table all strings up to the end of the match.</span></div><div class="line" id="LC1543">					<span class="c1">// strstart-1 and strstart are already inserted. If there is not</span></div><div class="line" id="LC1544">					<span class="c1">// enough lookahead, the last two strings are not inserted in</span></div><div class="line" id="LC1545">					<span class="c1">// the hash table.</span></div><div class="line" id="LC1546">					<span class="nx">lookahead</span> <span class="o">-=</span> <span class="nx">prev_length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1547">					<span class="nx">prev_length</span> <span class="o">-=</span> <span class="mi">2</span><span class="p">;</span></div><div class="line" id="LC1548">					<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC1549">						<span class="k">if</span> <span class="p">(</span><span class="o">++</span><span class="nx">strstart</span> <span class="o">&lt;=</span> <span class="nx">max_insert</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1550">							<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[(</span><span class="nx">strstart</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1551">							<span class="c1">// prev[strstart&amp;w_mask]=hash_head=head[ins_h];</span></div><div class="line" id="LC1552">							<span class="nx">hash_head</span> <span class="o">=</span> <span class="p">(</span><span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xffff</span><span class="p">);</span></div><div class="line" id="LC1553">							<span class="nx">prev</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">&amp;</span> <span class="nx">w_mask</span><span class="p">]</span> <span class="o">=</span> <span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">];</span></div><div class="line" id="LC1554">							<span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">=</span> <span class="nx">strstart</span><span class="p">;</span></div><div class="line" id="LC1555">						<span class="p">}</span></div><div class="line" id="LC1556">					<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="o">--</span><span class="nx">prev_length</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1557">					<span class="nx">match_available</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1558">					<span class="nx">match_length</span> <span class="o">=</span> <span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1559">					<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1560"><br></div><div class="line" id="LC1561">					<span class="k">if</span> <span class="p">(</span><span class="nx">bflush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1562">						<span class="nx">flush_block_only</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1563">						<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1564">							<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1565">					<span class="p">}</span></div><div class="line" id="LC1566">				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">match_available</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1567"><br></div><div class="line" id="LC1568">					<span class="c1">// If there was no match at the previous position, output a</span></div><div class="line" id="LC1569">					<span class="c1">// single literal. If there was a match but the current match</span></div><div class="line" id="LC1570">					<span class="c1">// is longer, truncate the previous match to a single literal.</span></div><div class="line" id="LC1571"><br></div><div class="line" id="LC1572">					<span class="nx">bflush</span> <span class="o">=</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC1573"><br></div><div class="line" id="LC1574">					<span class="k">if</span> <span class="p">(</span><span class="nx">bflush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1575">						<span class="nx">flush_block_only</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1576">					<span class="p">}</span></div><div class="line" id="LC1577">					<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1578">					<span class="nx">lookahead</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC1579">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1580">						<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1581">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC1582">					<span class="c1">// There is no previous match to compare with, wait for</span></div><div class="line" id="LC1583">					<span class="c1">// the next step to decide.</span></div><div class="line" id="LC1584"><br></div><div class="line" id="LC1585">					<span class="nx">match_available</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1586">					<span class="nx">strstart</span><span class="o">++</span><span class="p">;</span></div><div class="line" id="LC1587">					<span class="nx">lookahead</span><span class="o">--</span><span class="p">;</span></div><div class="line" id="LC1588">				<span class="p">}</span></div><div class="line" id="LC1589">			<span class="p">}</span></div><div class="line" id="LC1590"><br></div><div class="line" id="LC1591">			<span class="k">if</span> <span class="p">(</span><span class="nx">match_available</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1592">				<span class="nx">bflush</span> <span class="o">=</span> <span class="nx">_tr_tally</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">window</span><span class="p">[</span><span class="nx">strstart</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class="line" id="LC1593">				<span class="nx">match_available</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1594">			<span class="p">}</span></div><div class="line" id="LC1595">			<span class="nx">flush_block_only</span><span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">);</span></div><div class="line" id="LC1596"><br></div><div class="line" id="LC1597">			<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1598">				<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span><span class="p">)</span></div><div class="line" id="LC1599">					<span class="k">return</span> <span class="nx">FinishStarted</span><span class="p">;</span></div><div class="line" id="LC1600">				<span class="k">else</span></div><div class="line" id="LC1601">					<span class="k">return</span> <span class="nx">NeedMore</span><span class="p">;</span></div><div class="line" id="LC1602">			<span class="p">}</span></div><div class="line" id="LC1603"><br></div><div class="line" id="LC1604">			<span class="k">return</span> <span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FINISH</span> <span class="o">?</span> <span class="nx">FinishDone</span> <span class="o">:</span> <span class="nx">BlockDone</span><span class="p">;</span></div><div class="line" id="LC1605">		<span class="p">}</span></div><div class="line" id="LC1606"><br></div><div class="line" id="LC1607">		<span class="kd">function</span> <span class="nx">deflateReset</span><span class="p">(</span><span class="nx">strm</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1608">			<span class="nx">strm</span><span class="p">.</span><span class="nx">total_in</span> <span class="o">=</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">total_out</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1609">			<span class="nx">strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span> <span class="c1">//</span></div><div class="line" id="LC1610"><br></div><div class="line" id="LC1611">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1612">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_out</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1613"><br></div><div class="line" id="LC1614">			<span class="nx">status</span> <span class="o">=</span> <span class="nx">BUSY_STATE</span><span class="p">;</span></div><div class="line" id="LC1615"><br></div><div class="line" id="LC1616">			<span class="nx">last_flush</span> <span class="o">=</span> <span class="nx">Z_NO_FLUSH</span><span class="p">;</span></div><div class="line" id="LC1617"><br></div><div class="line" id="LC1618">			<span class="nx">tr_init</span><span class="p">();</span></div><div class="line" id="LC1619">			<span class="nx">lm_init</span><span class="p">();</span></div><div class="line" id="LC1620">			<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1621">		<span class="p">}</span></div><div class="line" id="LC1622"><br></div><div class="line" id="LC1623">		<span class="nx">that</span><span class="p">.</span><span class="nx">deflateInit</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">strm</span><span class="p">,</span> <span class="nx">_level</span><span class="p">,</span> <span class="nx">bits</span><span class="p">,</span> <span class="nx">_method</span><span class="p">,</span> <span class="nx">memLevel</span><span class="p">,</span> <span class="nx">_strategy</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1624">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_method</span><span class="p">)</span></div><div class="line" id="LC1625">				<span class="nx">_method</span> <span class="o">=</span> <span class="nx">Z_DEFLATED</span><span class="p">;</span></div><div class="line" id="LC1626">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">memLevel</span><span class="p">)</span></div><div class="line" id="LC1627">				<span class="nx">memLevel</span> <span class="o">=</span> <span class="nx">DEF_MEM_LEVEL</span><span class="p">;</span></div><div class="line" id="LC1628">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_strategy</span><span class="p">)</span></div><div class="line" id="LC1629">				<span class="nx">_strategy</span> <span class="o">=</span> <span class="nx">Z_DEFAULT_STRATEGY</span><span class="p">;</span></div><div class="line" id="LC1630"><br></div><div class="line" id="LC1631">			<span class="c1">// byte[] my_version=ZLIB_VERSION;</span></div><div class="line" id="LC1632"><br></div><div class="line" id="LC1633">			<span class="c1">//</span></div><div class="line" id="LC1634">			<span class="c1">// if (!version || version[0] != my_version[0]</span></div><div class="line" id="LC1635">			<span class="c1">// || stream_size != sizeof(z_stream)) {</span></div><div class="line" id="LC1636">			<span class="c1">// return Z_VERSION_ERROR;</span></div><div class="line" id="LC1637">			<span class="c1">// }</span></div><div class="line" id="LC1638"><br></div><div class="line" id="LC1639">			<span class="nx">strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1640"><br></div><div class="line" id="LC1641">			<span class="k">if</span> <span class="p">(</span><span class="nx">_level</span> <span class="o">==</span> <span class="nx">Z_DEFAULT_COMPRESSION</span><span class="p">)</span></div><div class="line" id="LC1642">				<span class="nx">_level</span> <span class="o">=</span> <span class="mi">6</span><span class="p">;</span></div><div class="line" id="LC1643"><br></div><div class="line" id="LC1644">			<span class="k">if</span> <span class="p">(</span><span class="nx">memLevel</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">memLevel</span> <span class="o">&gt;</span> <span class="nx">MAX_MEM_LEVEL</span> <span class="o">||</span> <span class="nx">_method</span> <span class="o">!=</span> <span class="nx">Z_DEFLATED</span> <span class="o">||</span> <span class="nx">bits</span> <span class="o">&lt;</span> <span class="mi">9</span> <span class="o">||</span> <span class="nx">bits</span> <span class="o">&gt;</span> <span class="mi">15</span> <span class="o">||</span> <span class="nx">_level</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">_level</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">||</span> <span class="nx">_strategy</span> <span class="o">&lt;</span> <span class="mi">0</span></div><div class="line" id="LC1645">					<span class="o">||</span> <span class="nx">_strategy</span> <span class="o">&gt;</span> <span class="nx">Z_HUFFMAN_ONLY</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1646">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1647">			<span class="p">}</span></div><div class="line" id="LC1648"><br></div><div class="line" id="LC1649">			<span class="nx">strm</span><span class="p">.</span><span class="nx">dstate</span> <span class="o">=</span> <span class="nx">that</span><span class="p">;</span></div><div class="line" id="LC1650"><br></div><div class="line" id="LC1651">			<span class="nx">w_bits</span> <span class="o">=</span> <span class="nx">bits</span><span class="p">;</span></div><div class="line" id="LC1652">			<span class="nx">w_size</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="nx">w_bits</span><span class="p">;</span></div><div class="line" id="LC1653">			<span class="nx">w_mask</span> <span class="o">=</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1654"><br></div><div class="line" id="LC1655">			<span class="nx">hash_bits</span> <span class="o">=</span> <span class="nx">memLevel</span> <span class="o">+</span> <span class="mi">7</span><span class="p">;</span></div><div class="line" id="LC1656">			<span class="nx">hash_size</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_bits</span><span class="p">;</span></div><div class="line" id="LC1657">			<span class="nx">hash_mask</span> <span class="o">=</span> <span class="nx">hash_size</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1658">			<span class="nx">hash_shift</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">hash_bits</span> <span class="o">+</span> <span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">MIN_MATCH</span><span class="p">);</span></div><div class="line" id="LC1659"><br></div><div class="line" id="LC1660">			<span class="nb">window</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">w_size</span> <span class="o">*</span> <span class="mi">2</span><span class="p">);</span></div><div class="line" id="LC1661">			<span class="nx">prev</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC1662">			<span class="nx">head</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC1663"><br></div><div class="line" id="LC1664">			<span class="nx">lit_bufsize</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="nx">memLevel</span> <span class="o">+</span> <span class="mi">6</span><span class="p">);</span> <span class="c1">// 16K elements by default</span></div><div class="line" id="LC1665"><br></div><div class="line" id="LC1666">			<span class="c1">// We overlay pending_buf and d_buf+l_buf. This works since the average</span></div><div class="line" id="LC1667">			<span class="c1">// output size for (length,distance) codes is &lt;= 24 bits.</span></div><div class="line" id="LC1668">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">lit_bufsize</span> <span class="o">*</span> <span class="mi">4</span><span class="p">);</span></div><div class="line" id="LC1669">			<span class="nx">pending_buf_size</span> <span class="o">=</span> <span class="nx">lit_bufsize</span> <span class="o">*</span> <span class="mi">4</span><span class="p">;</span></div><div class="line" id="LC1670"><br></div><div class="line" id="LC1671">			<span class="nx">d_buf</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">lit_bufsize</span> <span class="o">/</span> <span class="mi">2</span><span class="p">);</span></div><div class="line" id="LC1672">			<span class="nx">l_buf</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="o">*</span> <span class="nx">lit_bufsize</span><span class="p">;</span></div><div class="line" id="LC1673"><br></div><div class="line" id="LC1674">			<span class="nx">level</span> <span class="o">=</span> <span class="nx">_level</span><span class="p">;</span></div><div class="line" id="LC1675"><br></div><div class="line" id="LC1676">			<span class="nx">strategy</span> <span class="o">=</span> <span class="nx">_strategy</span><span class="p">;</span></div><div class="line" id="LC1677">			<span class="nx">method</span> <span class="o">=</span> <span class="nx">_method</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC1678"><br></div><div class="line" id="LC1679">			<span class="k">return</span> <span class="nx">deflateReset</span><span class="p">(</span><span class="nx">strm</span><span class="p">);</span></div><div class="line" id="LC1680">		<span class="p">};</span></div><div class="line" id="LC1681"><br></div><div class="line" id="LC1682">		<span class="nx">that</span><span class="p">.</span><span class="nx">deflateEnd</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1683">			<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">!=</span> <span class="nx">INIT_STATE</span> <span class="o">&amp;&amp;</span> <span class="nx">status</span> <span class="o">!=</span> <span class="nx">BUSY_STATE</span> <span class="o">&amp;&amp;</span> <span class="nx">status</span> <span class="o">!=</span> <span class="nx">FINISH_STATE</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1684">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1685">			<span class="p">}</span></div><div class="line" id="LC1686">			<span class="c1">// Deallocate in reverse order of allocations:</span></div><div class="line" id="LC1687">			<span class="nx">that</span><span class="p">.</span><span class="nx">pending_buf</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1688">			<span class="nx">head</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1689">			<span class="nx">prev</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1690">			<span class="nb">window</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1691">			<span class="c1">// free</span></div><div class="line" id="LC1692">			<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1693">			<span class="k">return</span> <span class="nx">status</span> <span class="o">==</span> <span class="nx">BUSY_STATE</span> <span class="o">?</span> <span class="nx">Z_DATA_ERROR</span> <span class="o">:</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1694">		<span class="p">};</span></div><div class="line" id="LC1695"><br></div><div class="line" id="LC1696">		<span class="nx">that</span><span class="p">.</span><span class="nx">deflateParams</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">strm</span><span class="p">,</span> <span class="nx">_level</span><span class="p">,</span> <span class="nx">_strategy</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1697">			<span class="kd">var</span> <span class="nx">err</span> <span class="o">=</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1698"><br></div><div class="line" id="LC1699">			<span class="k">if</span> <span class="p">(</span><span class="nx">_level</span> <span class="o">==</span> <span class="nx">Z_DEFAULT_COMPRESSION</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1700">				<span class="nx">_level</span> <span class="o">=</span> <span class="mi">6</span><span class="p">;</span></div><div class="line" id="LC1701">			<span class="p">}</span></div><div class="line" id="LC1702">			<span class="k">if</span> <span class="p">(</span><span class="nx">_level</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">_level</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">||</span> <span class="nx">_strategy</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">_strategy</span> <span class="o">&gt;</span> <span class="nx">Z_HUFFMAN_ONLY</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1703">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1704">			<span class="p">}</span></div><div class="line" id="LC1705"><br></div><div class="line" id="LC1706">			<span class="k">if</span> <span class="p">(</span><span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">func</span> <span class="o">!=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">_level</span><span class="p">].</span><span class="nx">func</span> <span class="o">&amp;&amp;</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">total_in</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1707">				<span class="c1">// Flush the last buffer:</span></div><div class="line" id="LC1708">				<span class="nx">err</span> <span class="o">=</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">deflate</span><span class="p">(</span><span class="nx">Z_PARTIAL_FLUSH</span><span class="p">);</span></div><div class="line" id="LC1709">			<span class="p">}</span></div><div class="line" id="LC1710"><br></div><div class="line" id="LC1711">			<span class="k">if</span> <span class="p">(</span><span class="nx">level</span> <span class="o">!=</span> <span class="nx">_level</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1712">				<span class="nx">level</span> <span class="o">=</span> <span class="nx">_level</span><span class="p">;</span></div><div class="line" id="LC1713">				<span class="nx">max_lazy_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">max_lazy</span><span class="p">;</span></div><div class="line" id="LC1714">				<span class="nx">good_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">good_length</span><span class="p">;</span></div><div class="line" id="LC1715">				<span class="nx">nice_match</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">nice_length</span><span class="p">;</span></div><div class="line" id="LC1716">				<span class="nx">max_chain_length</span> <span class="o">=</span> <span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">max_chain</span><span class="p">;</span></div><div class="line" id="LC1717">			<span class="p">}</span></div><div class="line" id="LC1718">			<span class="nx">strategy</span> <span class="o">=</span> <span class="nx">_strategy</span><span class="p">;</span></div><div class="line" id="LC1719">			<span class="k">return</span> <span class="nx">err</span><span class="p">;</span></div><div class="line" id="LC1720">		<span class="p">};</span></div><div class="line" id="LC1721"><br></div><div class="line" id="LC1722">		<span class="nx">that</span><span class="p">.</span><span class="nx">deflateSetDictionary</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">strm</span><span class="p">,</span> <span class="nx">dictionary</span><span class="p">,</span> <span class="nx">dictLength</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1723">			<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">dictLength</span><span class="p">;</span></div><div class="line" id="LC1724">			<span class="kd">var</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1725"><br></div><div class="line" id="LC1726">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">dictionary</span> <span class="o">||</span> <span class="nx">status</span> <span class="o">!=</span> <span class="nx">INIT_STATE</span><span class="p">)</span></div><div class="line" id="LC1727">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1728"><br></div><div class="line" id="LC1729">			<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="nx">MIN_MATCH</span><span class="p">)</span></div><div class="line" id="LC1730">				<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1731">			<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1732">				<span class="nx">length</span> <span class="o">=</span> <span class="nx">w_size</span> <span class="o">-</span> <span class="nx">MIN_LOOKAHEAD</span><span class="p">;</span></div><div class="line" id="LC1733">				<span class="nx">index</span> <span class="o">=</span> <span class="nx">dictLength</span> <span class="o">-</span> <span class="nx">length</span><span class="p">;</span> <span class="c1">// use the tail of the dictionary</span></div><div class="line" id="LC1734">			<span class="p">}</span></div><div class="line" id="LC1735">			<span class="nb">window</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">dictionary</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">index</span> <span class="o">+</span> <span class="nx">length</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC1736"><br></div><div class="line" id="LC1737">			<span class="nx">strstart</span> <span class="o">=</span> <span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC1738">			<span class="nx">block_start</span> <span class="o">=</span> <span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC1739"><br></div><div class="line" id="LC1740">			<span class="c1">// Insert all strings in the hash table (except for the last two bytes).</span></div><div class="line" id="LC1741">			<span class="c1">// s-&gt;lookahead stays null, so s-&gt;ins_h will be recomputed at the next</span></div><div class="line" id="LC1742">			<span class="c1">// call of fill_window.</span></div><div class="line" id="LC1743"><br></div><div class="line" id="LC1744">			<span class="nx">ins_h</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span></div><div class="line" id="LC1745">			<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1746"><br></div><div class="line" id="LC1747">			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;=</span> <span class="nx">length</span> <span class="o">-</span> <span class="nx">MIN_MATCH</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1748">				<span class="nx">ins_h</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">ins_h</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="nx">hash_shift</span><span class="p">)</span> <span class="o">^</span> <span class="p">(</span><span class="nb">window</span><span class="p">[(</span><span class="nx">n</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">MIN_MATCH</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">))</span> <span class="o">&amp;</span> <span class="nx">hash_mask</span><span class="p">;</span></div><div class="line" id="LC1749">				<span class="nx">prev</span><span class="p">[</span><span class="nx">n</span> <span class="o">&amp;</span> <span class="nx">w_mask</span><span class="p">]</span> <span class="o">=</span> <span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">];</span></div><div class="line" id="LC1750">				<span class="nx">head</span><span class="p">[</span><span class="nx">ins_h</span><span class="p">]</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class="line" id="LC1751">			<span class="p">}</span></div><div class="line" id="LC1752">			<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1753">		<span class="p">};</span></div><div class="line" id="LC1754"><br></div><div class="line" id="LC1755">		<span class="nx">that</span><span class="p">.</span><span class="nx">deflate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_strm</span><span class="p">,</span> <span class="nx">flush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1756">			<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">header</span><span class="p">,</span> <span class="nx">level_flags</span><span class="p">,</span> <span class="nx">old_flush</span><span class="p">,</span> <span class="nx">bstate</span><span class="p">;</span></div><div class="line" id="LC1757"><br></div><div class="line" id="LC1758">			<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">&gt;</span> <span class="nx">Z_FINISH</span> <span class="o">||</span> <span class="nx">flush</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1759">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1760">			<span class="p">}</span></div><div class="line" id="LC1761"><br></div><div class="line" id="LC1762">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_strm</span><span class="p">.</span><span class="nx">next_out</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">_strm</span><span class="p">.</span><span class="nx">next_in</span> <span class="o">&amp;&amp;</span> <span class="nx">_strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">status</span> <span class="o">==</span> <span class="nx">FINISH_STATE</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">!=</span> <span class="nx">Z_FINISH</span><span class="p">))</span> <span class="p">{</span></div><div class="line" id="LC1763">				<span class="nx">_strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="nx">z_errmsg</span><span class="p">[</span><span class="nx">Z_NEED_DICT</span> <span class="o">-</span> <span class="p">(</span><span class="nx">Z_STREAM_ERROR</span><span class="p">)];</span></div><div class="line" id="LC1764">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1765">			<span class="p">}</span></div><div class="line" id="LC1766">			<span class="k">if</span> <span class="p">(</span><span class="nx">_strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1767">				<span class="nx">_strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="nx">z_errmsg</span><span class="p">[</span><span class="nx">Z_NEED_DICT</span> <span class="o">-</span> <span class="p">(</span><span class="nx">Z_BUF_ERROR</span><span class="p">)];</span></div><div class="line" id="LC1768">				<span class="k">return</span> <span class="nx">Z_BUF_ERROR</span><span class="p">;</span></div><div class="line" id="LC1769">			<span class="p">}</span></div><div class="line" id="LC1770"><br></div><div class="line" id="LC1771">			<span class="nx">strm</span> <span class="o">=</span> <span class="nx">_strm</span><span class="p">;</span> <span class="c1">// just in case</span></div><div class="line" id="LC1772">			<span class="nx">old_flush</span> <span class="o">=</span> <span class="nx">last_flush</span><span class="p">;</span></div><div class="line" id="LC1773">			<span class="nx">last_flush</span> <span class="o">=</span> <span class="nx">flush</span><span class="p">;</span></div><div class="line" id="LC1774"><br></div><div class="line" id="LC1775">			<span class="c1">// Write the zlib header</span></div><div class="line" id="LC1776">			<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">==</span> <span class="nx">INIT_STATE</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1777">				<span class="nx">header</span> <span class="o">=</span> <span class="p">(</span><span class="nx">Z_DEFLATED</span> <span class="o">+</span> <span class="p">((</span><span class="nx">w_bits</span> <span class="o">-</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span><span class="p">))</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC1778">				<span class="nx">level_flags</span> <span class="o">=</span> <span class="p">((</span><span class="nx">level</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">)</span> <span class="o">&gt;&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1779"><br></div><div class="line" id="LC1780">				<span class="k">if</span> <span class="p">(</span><span class="nx">level_flags</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">)</span></div><div class="line" id="LC1781">					<span class="nx">level_flags</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class="line" id="LC1782">				<span class="nx">header</span> <span class="o">|=</span> <span class="p">(</span><span class="nx">level_flags</span> <span class="o">&lt;&lt;</span> <span class="mi">6</span><span class="p">);</span></div><div class="line" id="LC1783">				<span class="k">if</span> <span class="p">(</span><span class="nx">strstart</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1784">					<span class="nx">header</span> <span class="o">|=</span> <span class="nx">PRESET_DICT</span><span class="p">;</span></div><div class="line" id="LC1785">				<span class="nx">header</span> <span class="o">+=</span> <span class="mi">31</span> <span class="o">-</span> <span class="p">(</span><span class="nx">header</span> <span class="o">%</span> <span class="mi">31</span><span class="p">);</span></div><div class="line" id="LC1786"><br></div><div class="line" id="LC1787">				<span class="nx">status</span> <span class="o">=</span> <span class="nx">BUSY_STATE</span><span class="p">;</span></div><div class="line" id="LC1788">				<span class="nx">putShortMSB</span><span class="p">(</span><span class="nx">header</span><span class="p">);</span></div><div class="line" id="LC1789">			<span class="p">}</span></div><div class="line" id="LC1790"><br></div><div class="line" id="LC1791">			<span class="c1">// Flush as much pending output as possible</span></div><div class="line" id="LC1792">			<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">pending</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1793">				<span class="nx">strm</span><span class="p">.</span><span class="nx">flush_pending</span><span class="p">();</span></div><div class="line" id="LC1794">				<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1795">					<span class="c1">// console.log(" avail_out==0");</span></div><div class="line" id="LC1796">					<span class="c1">// Since avail_out is 0, deflate will be called again with</span></div><div class="line" id="LC1797">					<span class="c1">// more output space, but possibly with both pending and</span></div><div class="line" id="LC1798">					<span class="c1">// avail_in equal to zero. There won't be anything to do,</span></div><div class="line" id="LC1799">					<span class="c1">// but this is not an error situation so make sure we</span></div><div class="line" id="LC1800">					<span class="c1">// return OK instead of BUF_ERROR at next call of deflate:</span></div><div class="line" id="LC1801">					<span class="nx">last_flush</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1802">					<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1803">				<span class="p">}</span></div><div class="line" id="LC1804"><br></div><div class="line" id="LC1805">				<span class="c1">// Make sure there is something to do and avoid duplicate</span></div><div class="line" id="LC1806">				<span class="c1">// consecutive</span></div><div class="line" id="LC1807">				<span class="c1">// flushes. For repeated and useless calls with Z_FINISH, we keep</span></div><div class="line" id="LC1808">				<span class="c1">// returning Z_STREAM_END instead of Z_BUFF_ERROR.</span></div><div class="line" id="LC1809">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">&lt;=</span> <span class="nx">old_flush</span> <span class="o">&amp;&amp;</span> <span class="nx">flush</span> <span class="o">!=</span> <span class="nx">Z_FINISH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1810">				<span class="nx">strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="nx">z_errmsg</span><span class="p">[</span><span class="nx">Z_NEED_DICT</span> <span class="o">-</span> <span class="p">(</span><span class="nx">Z_BUF_ERROR</span><span class="p">)];</span></div><div class="line" id="LC1811">				<span class="k">return</span> <span class="nx">Z_BUF_ERROR</span><span class="p">;</span></div><div class="line" id="LC1812">			<span class="p">}</span></div><div class="line" id="LC1813"><br></div><div class="line" id="LC1814">			<span class="c1">// User must not provide more input after the first FINISH:</span></div><div class="line" id="LC1815">			<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">==</span> <span class="nx">FINISH_STATE</span> <span class="o">&amp;&amp;</span> <span class="nx">strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1816">				<span class="nx">_strm</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="nx">z_errmsg</span><span class="p">[</span><span class="nx">Z_NEED_DICT</span> <span class="o">-</span> <span class="p">(</span><span class="nx">Z_BUF_ERROR</span><span class="p">)];</span></div><div class="line" id="LC1817">				<span class="k">return</span> <span class="nx">Z_BUF_ERROR</span><span class="p">;</span></div><div class="line" id="LC1818">			<span class="p">}</span></div><div class="line" id="LC1819"><br></div><div class="line" id="LC1820">			<span class="c1">// Start a new block or continue the current one.</span></div><div class="line" id="LC1821">			<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">lookahead</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">||</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">!=</span> <span class="nx">Z_NO_FLUSH</span> <span class="o">&amp;&amp;</span> <span class="nx">status</span> <span class="o">!=</span> <span class="nx">FINISH_STATE</span><span class="p">))</span> <span class="p">{</span></div><div class="line" id="LC1822">				<span class="nx">bstate</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class="line" id="LC1823">				<span class="k">switch</span> <span class="p">(</span><span class="nx">config_table</span><span class="p">[</span><span class="nx">level</span><span class="p">].</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1824">				<span class="k">case</span> <span class="nx">STORED</span><span class="o">:</span></div><div class="line" id="LC1825">					<span class="nx">bstate</span> <span class="o">=</span> <span class="nx">deflate_stored</span><span class="p">(</span><span class="nx">flush</span><span class="p">);</span></div><div class="line" id="LC1826">					<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC1827">				<span class="k">case</span> <span class="nx">FAST</span><span class="o">:</span></div><div class="line" id="LC1828">					<span class="nx">bstate</span> <span class="o">=</span> <span class="nx">deflate_fast</span><span class="p">(</span><span class="nx">flush</span><span class="p">);</span></div><div class="line" id="LC1829">					<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC1830">				<span class="k">case</span> <span class="nx">SLOW</span><span class="o">:</span></div><div class="line" id="LC1831">					<span class="nx">bstate</span> <span class="o">=</span> <span class="nx">deflate_slow</span><span class="p">(</span><span class="nx">flush</span><span class="p">);</span></div><div class="line" id="LC1832">					<span class="k">break</span><span class="p">;</span></div><div class="line" id="LC1833">				<span class="k">default</span><span class="o">:</span></div><div class="line" id="LC1834">				<span class="p">}</span></div><div class="line" id="LC1835"><br></div><div class="line" id="LC1836">				<span class="k">if</span> <span class="p">(</span><span class="nx">bstate</span> <span class="o">==</span> <span class="nx">FinishStarted</span> <span class="o">||</span> <span class="nx">bstate</span> <span class="o">==</span> <span class="nx">FinishDone</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1837">					<span class="nx">status</span> <span class="o">=</span> <span class="nx">FINISH_STATE</span><span class="p">;</span></div><div class="line" id="LC1838">				<span class="p">}</span></div><div class="line" id="LC1839">				<span class="k">if</span> <span class="p">(</span><span class="nx">bstate</span> <span class="o">==</span> <span class="nx">NeedMore</span> <span class="o">||</span> <span class="nx">bstate</span> <span class="o">==</span> <span class="nx">FinishStarted</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1840">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1841">						<span class="nx">last_flush</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="c1">// avoid BUF_ERROR next call, see above</span></div><div class="line" id="LC1842">					<span class="p">}</span></div><div class="line" id="LC1843">					<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1844">					<span class="c1">// If flush != Z_NO_FLUSH &amp;&amp; avail_out === 0, the next call</span></div><div class="line" id="LC1845">					<span class="c1">// of deflate should use the same flush parameter to make sure</span></div><div class="line" id="LC1846">					<span class="c1">// that the flush is complete. So we don't have to output an</span></div><div class="line" id="LC1847">					<span class="c1">// empty block here, this will be done at next call. This also</span></div><div class="line" id="LC1848">					<span class="c1">// ensures that for a very small output buffer, we emit at most</span></div><div class="line" id="LC1849">					<span class="c1">// one empty block.</span></div><div class="line" id="LC1850">				<span class="p">}</span></div><div class="line" id="LC1851"><br></div><div class="line" id="LC1852">				<span class="k">if</span> <span class="p">(</span><span class="nx">bstate</span> <span class="o">==</span> <span class="nx">BlockDone</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1853">					<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_PARTIAL_FLUSH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1854">						<span class="nx">_tr_align</span><span class="p">();</span></div><div class="line" id="LC1855">					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// FULL_FLUSH or SYNC_FLUSH</span></div><div class="line" id="LC1856">						<span class="nx">_tr_stored_block</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC1857">						<span class="c1">// For a full flush, this empty block will be recognized</span></div><div class="line" id="LC1858">						<span class="c1">// as a special marker by inflate_sync().</span></div><div class="line" id="LC1859">						<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">==</span> <span class="nx">Z_FULL_FLUSH</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1860">							<span class="c1">// state.head[s.hash_size-1]=0;</span></div><div class="line" id="LC1861">							<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">hash_size</span><span class="cm">/*-1*/</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC1862">								<span class="c1">// forget history</span></div><div class="line" id="LC1863">								<span class="nx">head</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1864">						<span class="p">}</span></div><div class="line" id="LC1865">					<span class="p">}</span></div><div class="line" id="LC1866">					<span class="nx">strm</span><span class="p">.</span><span class="nx">flush_pending</span><span class="p">();</span></div><div class="line" id="LC1867">					<span class="k">if</span> <span class="p">(</span><span class="nx">strm</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1868">						<span class="nx">last_flush</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="c1">// avoid BUF_ERROR at next call, see above</span></div><div class="line" id="LC1869">						<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1870">					<span class="p">}</span></div><div class="line" id="LC1871">				<span class="p">}</span></div><div class="line" id="LC1872">			<span class="p">}</span></div><div class="line" id="LC1873"><br></div><div class="line" id="LC1874">			<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span> <span class="o">!=</span> <span class="nx">Z_FINISH</span><span class="p">)</span></div><div class="line" id="LC1875">				<span class="k">return</span> <span class="nx">Z_OK</span><span class="p">;</span></div><div class="line" id="LC1876">			<span class="k">return</span> <span class="nx">Z_STREAM_END</span><span class="p">;</span></div><div class="line" id="LC1877">		<span class="p">};</span></div><div class="line" id="LC1878">	<span class="p">}</span></div><div class="line" id="LC1879"><br></div><div class="line" id="LC1880">	<span class="c1">// ZStream</span></div><div class="line" id="LC1881"><br></div><div class="line" id="LC1882">	<span class="kd">function</span> <span class="nx">ZStream</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1883">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1884">		<span class="nx">that</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1885">		<span class="nx">that</span><span class="p">.</span><span class="nx">next_out_index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1886">		<span class="c1">// that.next_in; // next input byte</span></div><div class="line" id="LC1887">		<span class="nx">that</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// number of bytes available at next_in</span></div><div class="line" id="LC1888">		<span class="nx">that</span><span class="p">.</span><span class="nx">total_in</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// total nb of input bytes read so far</span></div><div class="line" id="LC1889">		<span class="c1">// that.next_out; // next output byte should be put there</span></div><div class="line" id="LC1890">		<span class="nx">that</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// remaining free space at next_out</span></div><div class="line" id="LC1891">		<span class="nx">that</span><span class="p">.</span><span class="nx">total_out</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// total nb of bytes output so far</span></div><div class="line" id="LC1892">		<span class="c1">// that.msg;</span></div><div class="line" id="LC1893">		<span class="c1">// that.dstate;</span></div><div class="line" id="LC1894">	<span class="p">}</span></div><div class="line" id="LC1895"><br></div><div class="line" id="LC1896">	<span class="nx">ZStream</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class="line" id="LC1897">		<span class="nx">deflateInit</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">level</span><span class="p">,</span> <span class="nx">bits</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1898">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1899">			<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Deflate</span><span class="p">();</span></div><div class="line" id="LC1900">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">bits</span><span class="p">)</span></div><div class="line" id="LC1901">				<span class="nx">bits</span> <span class="o">=</span> <span class="nx">MAX_BITS</span><span class="p">;</span></div><div class="line" id="LC1902">			<span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">deflateInit</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">bits</span><span class="p">);</span></div><div class="line" id="LC1903">		<span class="p">},</span></div><div class="line" id="LC1904"><br></div><div class="line" id="LC1905">		<span class="nx">deflate</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">flush</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1906">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1907">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1908">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1909">			<span class="p">}</span></div><div class="line" id="LC1910">			<span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">deflate</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">flush</span><span class="p">);</span></div><div class="line" id="LC1911">		<span class="p">},</span></div><div class="line" id="LC1912"><br></div><div class="line" id="LC1913">		<span class="nx">deflateEnd</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1914">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1915">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">)</span></div><div class="line" id="LC1916">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1917">			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">deflateEnd</span><span class="p">();</span></div><div class="line" id="LC1918">			<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC1919">			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class="line" id="LC1920">		<span class="p">},</span></div><div class="line" id="LC1921"><br></div><div class="line" id="LC1922">		<span class="nx">deflateParams</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">level</span><span class="p">,</span> <span class="nx">strategy</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1923">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1924">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">)</span></div><div class="line" id="LC1925">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1926">			<span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">deflateParams</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">strategy</span><span class="p">);</span></div><div class="line" id="LC1927">		<span class="p">},</span></div><div class="line" id="LC1928"><br></div><div class="line" id="LC1929">		<span class="nx">deflateSetDictionary</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dictionary</span><span class="p">,</span> <span class="nx">dictLength</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1930">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1931">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">)</span></div><div class="line" id="LC1932">				<span class="k">return</span> <span class="nx">Z_STREAM_ERROR</span><span class="p">;</span></div><div class="line" id="LC1933">			<span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">deflateSetDictionary</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">dictionary</span><span class="p">,</span> <span class="nx">dictLength</span><span class="p">);</span></div><div class="line" id="LC1934">		<span class="p">},</span></div><div class="line" id="LC1935"><br></div><div class="line" id="LC1936">		<span class="c1">// Read a new buffer from the current input stream, update the</span></div><div class="line" id="LC1937">		<span class="c1">// total number of bytes read. All deflate() input goes through</span></div><div class="line" id="LC1938">		<span class="c1">// this function so some applications may wish to modify it to avoid</span></div><div class="line" id="LC1939">		<span class="c1">// allocating a large strm-&gt;next_in buffer and copying from it.</span></div><div class="line" id="LC1940">		<span class="c1">// (See also flush_pending()).</span></div><div class="line" id="LC1941">		<span class="nx">read_buf</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">buf</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">size</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1942">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1943">			<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">avail_in</span><span class="p">;</span></div><div class="line" id="LC1944">			<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="nx">size</span><span class="p">)</span></div><div class="line" id="LC1945">				<span class="nx">len</span> <span class="o">=</span> <span class="nx">size</span><span class="p">;</span></div><div class="line" id="LC1946">			<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1947">				<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1948">			<span class="nx">that</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">-=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1949">			<span class="nx">buf</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">next_in</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">next_in_index</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">+</span> <span class="nx">len</span><span class="p">),</span> <span class="nx">start</span><span class="p">);</span></div><div class="line" id="LC1950">			<span class="nx">that</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1951">			<span class="nx">that</span><span class="p">.</span><span class="nx">total_in</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1952">			<span class="k">return</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1953">		<span class="p">},</span></div><div class="line" id="LC1954"><br></div><div class="line" id="LC1955">		<span class="c1">// Flush as much pending output as possible. All deflate() output goes</span></div><div class="line" id="LC1956">		<span class="c1">// through this function so some applications may wish to modify it</span></div><div class="line" id="LC1957">		<span class="c1">// to avoid allocating a large strm-&gt;next_out buffer and copying into it.</span></div><div class="line" id="LC1958">		<span class="c1">// (See also read_buf()).</span></div><div class="line" id="LC1959">		<span class="nx">flush_pending</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC1960">			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1961">			<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending</span><span class="p">;</span></div><div class="line" id="LC1962"><br></div><div class="line" id="LC1963">			<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">avail_out</span><span class="p">)</span></div><div class="line" id="LC1964">				<span class="nx">len</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">avail_out</span><span class="p">;</span></div><div class="line" id="LC1965">			<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC1966">				<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC1967"><br></div><div class="line" id="LC1968">			<span class="c1">// if (that.dstate.pending_buf.length &lt;= that.dstate.pending_out || that.next_out.length &lt;= that.next_out_index</span></div><div class="line" id="LC1969">			<span class="c1">// || that.dstate.pending_buf.length &lt; (that.dstate.pending_out + len) || that.next_out.length &lt; (that.next_out_index +</span></div><div class="line" id="LC1970">			<span class="c1">// len)) {</span></div><div class="line" id="LC1971">			<span class="c1">// console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +</span></div><div class="line" id="LC1972">			<span class="c1">// that.next_out_index + ", " + len);</span></div><div class="line" id="LC1973">			<span class="c1">// console.log("avail_out=" + that.avail_out);</span></div><div class="line" id="LC1974">			<span class="c1">// }</span></div><div class="line" id="LC1975"><br></div><div class="line" id="LC1976">			<span class="nx">that</span><span class="p">.</span><span class="nx">next_out</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending_buf</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending_out</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending_out</span> <span class="o">+</span> <span class="nx">len</span><span class="p">),</span> <span class="nx">that</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">);</span></div><div class="line" id="LC1977"><br></div><div class="line" id="LC1978">			<span class="nx">that</span><span class="p">.</span><span class="nx">next_out_index</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1979">			<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending_out</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1980">			<span class="nx">that</span><span class="p">.</span><span class="nx">total_out</span> <span class="o">+=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1981">			<span class="nx">that</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">-=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1982">			<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending</span> <span class="o">-=</span> <span class="nx">len</span><span class="p">;</span></div><div class="line" id="LC1983">			<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1984">				<span class="nx">that</span><span class="p">.</span><span class="nx">dstate</span><span class="p">.</span><span class="nx">pending_out</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC1985">			<span class="p">}</span></div><div class="line" id="LC1986">		<span class="p">}</span></div><div class="line" id="LC1987">	<span class="p">};</span></div><div class="line" id="LC1988"><br></div><div class="line" id="LC1989">	<span class="c1">// Deflater</span></div><div class="line" id="LC1990"><br></div><div class="line" id="LC1991">	<span class="kd">function</span> <span class="nx">Deflater</span><span class="p">(</span><span class="nx">level</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC1992">		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class="line" id="LC1993">		<span class="kd">var</span> <span class="nx">z</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ZStream</span><span class="p">();</span></div><div class="line" id="LC1994">		<span class="kd">var</span> <span class="nx">bufsize</span> <span class="o">=</span> <span class="mi">512</span><span class="p">;</span></div><div class="line" id="LC1995">		<span class="kd">var</span> <span class="nx">flush</span> <span class="o">=</span> <span class="nx">Z_NO_FLUSH</span><span class="p">;</span></div><div class="line" id="LC1996">		<span class="kd">var</span> <span class="nx">buf</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">bufsize</span><span class="p">);</span></div><div class="line" id="LC1997"><br></div><div class="line" id="LC1998">		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">level</span> <span class="o">==</span> <span class="s2">"undefined"</span><span class="p">)</span></div><div class="line" id="LC1999">			<span class="nx">level</span> <span class="o">=</span> <span class="nx">Z_DEFAULT_COMPRESSION</span><span class="p">;</span></div><div class="line" id="LC2000">		<span class="nx">z</span><span class="p">.</span><span class="nx">deflateInit</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class="line" id="LC2001">		<span class="nx">z</span><span class="p">.</span><span class="nx">next_out</span> <span class="o">=</span> <span class="nx">buf</span><span class="p">;</span></div><div class="line" id="LC2002"><br></div><div class="line" id="LC2003">		<span class="nx">that</span><span class="p">.</span><span class="nx">append</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">onprogress</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2004">			<span class="kd">var</span> <span class="nx">err</span><span class="p">,</span> <span class="nx">buffers</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bufferIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bufferSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">array</span><span class="p">;</span></div><div class="line" id="LC2005">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class="line" id="LC2006">				<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC2007">			<span class="nx">z</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC2008">			<span class="nx">z</span><span class="p">.</span><span class="nx">next_in</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class="line" id="LC2009">			<span class="nx">z</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC2010">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC2011">				<span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC2012">				<span class="nx">z</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">=</span> <span class="nx">bufsize</span><span class="p">;</span></div><div class="line" id="LC2013">				<span class="nx">err</span> <span class="o">=</span> <span class="nx">z</span><span class="p">.</span><span class="nx">deflate</span><span class="p">(</span><span class="nx">flush</span><span class="p">);</span></div><div class="line" id="LC2014">				<span class="k">if</span> <span class="p">(</span><span class="nx">err</span> <span class="o">!=</span> <span class="nx">Z_OK</span><span class="p">)</span></div><div class="line" id="LC2015">					<span class="k">throw</span> <span class="s2">"deflating: "</span> <span class="o">+</span> <span class="nx">z</span><span class="p">.</span><span class="nx">msg</span><span class="p">;</span></div><div class="line" id="LC2016">				<span class="k">if</span> <span class="p">(</span><span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">)</span></div><div class="line" id="LC2017">					<span class="k">if</span> <span class="p">(</span><span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span> <span class="o">==</span> <span class="nx">bufsize</span><span class="p">)</span></div><div class="line" id="LC2018">						<span class="nx">buffers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buf</span><span class="p">));</span></div><div class="line" id="LC2019">					<span class="k">else</span></div><div class="line" id="LC2020">						<span class="nx">buffers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buf</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">)));</span></div><div class="line" id="LC2021">				<span class="nx">bufferSize</span> <span class="o">+=</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">;</span></div><div class="line" id="LC2022">				<span class="k">if</span> <span class="p">(</span><span class="nx">onprogress</span> <span class="o">&amp;&amp;</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_in_index</span> <span class="o">!=</span> <span class="nx">lastIndex</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2023">					<span class="nx">onprogress</span><span class="p">(</span><span class="nx">z</span><span class="p">.</span><span class="nx">next_in_index</span><span class="p">);</span></div><div class="line" id="LC2024">					<span class="nx">lastIndex</span> <span class="o">=</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_in_index</span><span class="p">;</span></div><div class="line" id="LC2025">				<span class="p">}</span></div><div class="line" id="LC2026">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">z</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">z</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC2027">			<span class="nx">array</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">bufferSize</span><span class="p">);</span></div><div class="line" id="LC2028">			<span class="nx">buffers</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2029">				<span class="nx">array</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">chunk</span><span class="p">,</span> <span class="nx">bufferIndex</span><span class="p">);</span></div><div class="line" id="LC2030">				<span class="nx">bufferIndex</span> <span class="o">+=</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC2031">			<span class="p">});</span></div><div class="line" id="LC2032">			<span class="k">return</span> <span class="nx">array</span><span class="p">;</span></div><div class="line" id="LC2033">		<span class="p">};</span></div><div class="line" id="LC2034">		<span class="nx">that</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class="line" id="LC2035">			<span class="kd">var</span> <span class="nx">err</span><span class="p">,</span> <span class="nx">buffers</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">bufferIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bufferSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">array</span><span class="p">;</span></div><div class="line" id="LC2036">			<span class="k">do</span> <span class="p">{</span></div><div class="line" id="LC2037">				<span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class="line" id="LC2038">				<span class="nx">z</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">=</span> <span class="nx">bufsize</span><span class="p">;</span></div><div class="line" id="LC2039">				<span class="nx">err</span> <span class="o">=</span> <span class="nx">z</span><span class="p">.</span><span class="nx">deflate</span><span class="p">(</span><span class="nx">Z_FINISH</span><span class="p">);</span></div><div class="line" id="LC2040">				<span class="k">if</span> <span class="p">(</span><span class="nx">err</span> <span class="o">!=</span> <span class="nx">Z_STREAM_END</span> <span class="o">&amp;&amp;</span> <span class="nx">err</span> <span class="o">!=</span> <span class="nx">Z_OK</span><span class="p">)</span></div><div class="line" id="LC2041">					<span class="k">throw</span> <span class="s2">"deflating: "</span> <span class="o">+</span> <span class="nx">z</span><span class="p">.</span><span class="nx">msg</span><span class="p">;</span></div><div class="line" id="LC2042">				<span class="k">if</span> <span class="p">(</span><span class="nx">bufsize</span> <span class="o">-</span> <span class="nx">z</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class="line" id="LC2043">					<span class="nx">buffers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buf</span><span class="p">.</span><span class="nx">subarray</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">)));</span></div><div class="line" id="LC2044">				<span class="nx">bufferSize</span> <span class="o">+=</span> <span class="nx">z</span><span class="p">.</span><span class="nx">next_out_index</span><span class="p">;</span></div><div class="line" id="LC2045">			<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">z</span><span class="p">.</span><span class="nx">avail_in</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">z</span><span class="p">.</span><span class="nx">avail_out</span> <span class="o">===</span> <span class="mi">0</span><span class="p">);</span></div><div class="line" id="LC2046">			<span class="nx">z</span><span class="p">.</span><span class="nx">deflateEnd</span><span class="p">();</span></div><div class="line" id="LC2047">			<span class="nx">array</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">bufferSize</span><span class="p">);</span></div><div class="line" id="LC2048">			<span class="nx">buffers</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2049">				<span class="nx">array</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">chunk</span><span class="p">,</span> <span class="nx">bufferIndex</span><span class="p">);</span></div><div class="line" id="LC2050">				<span class="nx">bufferIndex</span> <span class="o">+=</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class="line" id="LC2051">			<span class="p">});</span></div><div class="line" id="LC2052">			<span class="k">return</span> <span class="nx">array</span><span class="p">;</span></div><div class="line" id="LC2053">		<span class="p">};</span></div><div class="line" id="LC2054">	<span class="p">}</span></div><div class="line" id="LC2055"><br></div><div class="line" id="LC2056">	<span class="kd">var</span> <span class="nx">deflater</span><span class="p">;</span></div><div class="line" id="LC2057"><br></div><div class="line" id="LC2058">	<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">zip</span><span class="p">)</span></div><div class="line" id="LC2059">		<span class="nx">obj</span><span class="p">.</span><span class="nx">zip</span><span class="p">.</span><span class="nx">Deflater</span> <span class="o">=</span> <span class="nx">Deflater</span><span class="p">;</span></div><div class="line" id="LC2060">	<span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC2061">		<span class="nx">deflater</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Deflater</span><span class="p">();</span></div><div class="line" id="LC2062">		<span class="nx">obj</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">"message"</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2063">			<span class="kd">var</span> <span class="nx">message</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class="line" id="LC2064">			<span class="k">if</span> <span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">init</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2065">				<span class="nx">deflater</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Deflater</span><span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">level</span><span class="p">);</span></div><div class="line" id="LC2066">				<span class="nx">obj</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">({</span></div><div class="line" id="LC2067">					<span class="nx">oninit</span> <span class="o">:</span> <span class="kc">true</span></div><div class="line" id="LC2068">				<span class="p">});</span></div><div class="line" id="LC2069">			<span class="p">}</span></div><div class="line" id="LC2070">			<span class="k">if</span> <span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">append</span><span class="p">)</span></div><div class="line" id="LC2071">				<span class="nx">obj</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">({</span></div><div class="line" id="LC2072">					<span class="nx">onappend</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class="line" id="LC2073">					<span class="nx">data</span> <span class="o">:</span> <span class="nx">deflater</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">current</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2074">						<span class="nx">obj</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">({</span></div><div class="line" id="LC2075">							<span class="nx">progress</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class="line" id="LC2076">							<span class="nx">current</span> <span class="o">:</span> <span class="nx">current</span></div><div class="line" id="LC2077">						<span class="p">});</span></div><div class="line" id="LC2078">					<span class="p">})</span></div><div class="line" id="LC2079">				<span class="p">});</span></div><div class="line" id="LC2080">			<span class="k">if</span> <span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">flush</span><span class="p">)</span></div><div class="line" id="LC2081">				<span class="nx">obj</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">({</span></div><div class="line" id="LC2082">					<span class="nx">onflush</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class="line" id="LC2083">					<span class="nx">data</span> <span class="o">:</span> <span class="nx">deflater</span><span class="p">.</span><span class="nx">flush</span><span class="p">()</span></div><div class="line" id="LC2084">				<span class="p">});</span></div><div class="line" id="LC2085">		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class="line" id="LC2086">	<span class="p">}</span></div><div class="line" id="LC2087"><br></div><div class="line" id="LC2088"><span class="p">})(</span><span class="k">this</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </tbody></table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" placeholder="Jump to line…" autofocus="" type="text">
    <button type="submit" class="button">Go</button>
  </form>
</div>

</div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com/">API</a></li>
      <li><a href="http://training.github.com/">Training</a></li>
      <li><a href="http://shop.github.com/">Shop</a></li>
      <li><a href="https://github.com/blog">Blog</a></li>
      <li><a href="https://github.com/about">About</a></li>

    </ul>

    <a href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>© 2013 <span title="0.12375s from fe17.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
        <li><a href="https://github.com/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester" data-url="/gildas-lormeau/zip.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a original-title="Exit Zen Mode" href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a original-title="Switch themes" href="#" class="theme-switcher js-theme-switcher tooltipped leftwards">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  


<div style="position: absolute; left: -9999px; top: -9999px; width: 15px; height: 15px; z-index: 9999;" data-clipboard-ready="false" class="global-zeroclipboard-container" id="global-zeroclipboard-html-bridge">      <div role="button" tabindex="0" title="https://github.global.ssl.fastly.net/flash/ZeroClipboard.swf?nocache=1377174909431" style="background: url(&quot;chrome://flashblock/content/flash.png&quot;) no-repeat scroll center center transparent ! important; min-width: 32px ! important; min-height: 32px ! important; width: 100%; height: 100%; border: 1px solid rgb(223, 223, 223); cursor: pointer; overflow: hidden; display: inline-block; visibility: visible ! important; opacity: 100 ! important; -moz-box-sizing: border-box;" bgactive="url(chrome://flashblock/content/flashplay.png) no-repeat center" bginactive="url(chrome://flashblock/content/flash.png) no-repeat center"></div></div>    <div class="facebox" id="facebox" style="display:none;">       <div class="facebox-popup">         <div class="facebox-content">         </div>         <button type="button" class="facebox-close">           <span class="octicon octicon-remove-close"></span>         </button>       </div>     </div></body></html>