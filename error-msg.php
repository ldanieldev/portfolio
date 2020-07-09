<?php
function obfuscate_email($email) {
    $obfuscatedEmail = null;
    $length = strlen($email);
    for ($i = 0; $i < $length; $i++) {
        $obfuscatedEmail .= "&#" . ord($email[$i]);
    }
    return $obfuscatedEmail;
}
	
if($_GET)
   $status = htmlentities (trim($_GET['e']), ENT_QUOTES);
else
    $status = 404;

$codes = array(
    401 => array('401 Unauthorized Access', 'You do not have the privileges to view the requested page.'),
    403 => array('403 Forbidden Access', 'Trying to view some forbidden files. Very naughty.'),
    404 => array('404 File Not Found', 'The page requested was not found.'),
    405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
    500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
);

$title = $codes[$status][0];
$message = $codes[$status][1];

$page_options = array('desc'=>'noindex, nofollow', 'keywords'=>'noindex, nofollow', 'robots'=>'noindex, nofollow');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="description" content="<?php echo $page_options['desc']; ?>"/>
    <meta name="keywords" content="<?php echo $page_options['keywords']; ?>"/>
    <meta name="robots" content="<?php echo $page_options['robots'];?>"/>
    <meta name="geo.region" content="US-MO"/>
    <meta name="geo.placename" content="St Charles"/>
    <meta name="geo.position" content="38.783333;-90.516667"/>
    <meta name="ICBM" content="38.783333, -90.516667"/>

    <link rel="home" href="http://www.ldanieldev.com" />

    <link rel="icon" type="image/png" href="img/favicon.ico">

    <title>Le-Andris Daniel - Web Developer &amp; PC Technician - Error <?php echo $title;?></title>

    <!-- responsive meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- main stylesheet -->
    <link rel="stylesheet" href="css/style.css">
    <!-- responsive stylesheet -->
    <link rel="stylesheet" href="css/responsive.css">
    <style type="text/css">
        #content{ background: #e9eaec; padding: 23% 0; line-height: 3; margin: 0 auto; width: 100%;} 
        #content h1{font-size: 45px;}
        #content p{font-size: 30px; }
        #content h1, #content p{text-align: center;}
    </style>
</head>
<body class="home-with-sidebar homepage">

<!-- .preloader -->
<!-- <div class="preloader"></div> -->
<!-- /.preloader -->

<section class="wrapper">

    <!-- .hidden-bar -->
    <section class="hidden-bar darken left-align anim-5 hidden-bar-showed">
        <div class="hidden-bar-closer">
            <button class="btn">
                <i class="fa fa-close"></i>
            </button>
        </div>
        <!-- .hidden-bar-wrapper -->
        <div class="hidden-bar-wrapper">

            <!-- .logo -->
            <div class="logo text-center">
                <a href="index.html">
                    <img src="img/resources/logo.png" alt="Le-Andris Daniel Logo">
                </a>            
            </div><!-- /.logo -->
            <!-- .main-menu -->
            <div class="main-menu text-center">
                <ul class="navigation mainmenu scroll-menu one-page-scroll-menu">
                    <li class="">
                        <a href="http://www.ldanieldev.com/#banner">Home</a>                      
                    </li>
                    <li class="">
                        <a href="http://www.ldanieldev.com/#about">About</a>
                    </li>
                    <li class="">                       
                        <a href="http://www.ldanieldev.com/#services">Services</a>                        
                    </li>
                    <li class="">                       
                        <a href="http://www.ldanieldev.com/#portfolio">Portfolio</a>
                    </li>
                    <li class="">       
                        <a href="http://www.ldanieldev.com/#skills">Skills</a>
                    </li>                   
                    <li class="">                                                       
                        <a href="http://www.ldanieldev.com/#testimonaials">Testimonials</a>
                    </li>                   
                    <li class="">                                                       
                        <a href="http://portal.ldanieldev.com">Portal</a>
                    </li>
                </ul><!-- /.navigation -->
            </div><!-- /.main-menu -->

        </div><!-- /.hidden-bar-wrapper -->
    </section><!-- /.hidden-bar -->


    <section class="inner-wrapper">

        <!--.header-v3 -->
        <header class="header-v3 stricky anim-5">
            <div class="container-fluid">
                <!-- .main-menu-wrap -->
                <nav class="main-menu-wrap anim-5-all pull-right">
                    <!-- .nav-toggler -->
                    <div class="nav-toggler">
                        <button class="hidden-bar-opener"><i class="fa fa-bars"></i></button>
                    </div><!-- /.nav-toggler -->
                </nav><!-- /.main-menu-wrap -->
            </div>
        </header><!-- /.header-v3-->    

    	<div id="content" class="container row">
            <?php echo '<h1>'.$title.'</h1><p>'.$message .'</p>'; ?>
    	</div>

        <!-- .footer-v2 -->
        <footer class="footer-v2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <!-- .single-footer-box -->
                        <div class="single-footer-box">
                            <!-- .icon-box -->
                            <div class="icon-box">
                                <i class="fa fa-map-marker"></i>
                            </div><!-- /.icon-box -->
                            <!-- .content -->
                            <div class="content">
                                <p>Saint Charles, Missouri, USA</p>
                            </div><!-- /.content -->
                        </div><!-- /.single-footer-box -->
                    </div>
                    <div class="col-md-4">
                        <!-- .single-footer-box -->
                        <div class="single-footer-box">
                            <!-- .icon-box -->
                            <div class="icon-box">
                                <i class="fa fa-phone"></i>
                            </div><!-- /.icon-box -->
                            <!-- .content -->
                            <div class="content">
                                <p>Tel: +1 636 866 8172</p>
                            </div><!-- /.content -->
                        </div><!-- /.single-footer-box -->
                    </div>
                    <div class="col-md-4">
                        <!-- .single-footer-box -->
                        <div class="single-footer-box">
                            <!-- .icon-box -->
                            <div class="icon-box">
                                <i class="fa fa-envelope-o"></i>
                            </div><!-- /.icon-box -->
                            <!-- .content -->
                            <div class="content">
                                <p><a href="mailto:<?php echo obfuscate_email('Lee@LDanielDev.Com'); ?>"><?php echo obfuscate_email('Lee@LDanielDev.Com'); ?></a></p>
                            </div><!-- /.content -->
                        </div><!-- /.single-footer-box -->
                    </div>
                </div>
                <div class="footer-copy-box clearfix">
                    <div class="pull-left">
                        <p>Copyright &copy; Le-Andris Daniel. All rights reserved. </p>
                    </div>
                    <div class="pull-right designer">
                        <p></p>
                    </div>
                </div>
            </div>
        </footer><!-- /.footer-v2 -->
    </section>
</section>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/vegas.min.js"></script>
<script src="js/jquery.mixitup.min.js"></script>
<script src="js/jquery.fancybox.pack.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/jquery.countTo.js"></script>
<script src="js/validate.js"></script>
<script src="js/typed.min.js"></script>
<script src="js/jquery.easing.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/custom.js"></script>
</body>
</html>