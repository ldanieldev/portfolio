<?php 
function obfuscate_email($email) {
	$obfuscatedEmail = null;
	$length = strlen($email);
	for ($i = 0; $i < $length; $i++) {
		$obfuscatedEmail .= "&#" . ord($email[$i]);
	}
	return $obfuscatedEmail;
}
$page_options = array(
	'title' 	    => 'Portfolio of HTML5, CSS3, and PHP Developer Le-Andris Daniel',
	'desc'		    => 'Portfolio of developer and programmer Le-Andris Daniel based in Saint Charles, MO. I develop HTML5, CSS3, and PHP webpages using clean and valid coding standards.',
	'keywords'      => 'HTML5, CSS3, Web Development, PHP development, css development, psd to css, psd to html, web development missouri, missouri web development, web design, Le-Andris Daniel',
	'robots'		=> 'index, follow'
);
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

	<meta property='og:title' content='<?php echo $page_options['title']; ?>'/>
	<meta property="og:description" content="<?php echo $page_options['desc']; ?>"/>
	<meta property='og:url' content='http://www.ldanieldev.com/'/>
	<meta property='og:site_name' content='Portfolio of HTML5, CSS3, and PHP Developer Le-Andris Daniel'/>
	<meta property='og:type' content='website'/>
	<meta property='og:image' content='http://www.ldanieldev.com/img/resources/logo.png'/>
	<meta property="og:locality" content="St Charles"/>
    <meta property="og:region" content="MO"/>
    <meta property="og:country-name" content="USA"/>
    <meta property='og:locale' content='en_us'/>

	<link rel="schema.DC" href="http://www.purl.org/dc/elements/1.1/"/>
	<meta name="DC.title" content="<?php echo $page_options['title']; ?>" />
	<meta name="DC.description" content="<?php echo $page_options['desc']; ?>"/>
	<meta name="DC.subject" content="<?php echo str_replace(',', ';', $page_options['keywords']); ?>"/>
	<meta name="DC.language" content="en-US" />
	<meta name="DC.coverage" content="US-MO" />

	<link rel="home" href="http://www.ldanieldev.com" />

	<link rel="icon" type="image/png" href="img/favicon.ico">

	<title>Le-Andris Daniel - Web Developer &amp; PC Technician</title>

	<!-- responsive meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- main stylesheet -->
	<link rel="stylesheet" href="css/style.css">
	<!-- responsive stylesheet -->
	<link rel="stylesheet" href="css/responsive.css">
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
					<li class="scrollToLink">
						<a href="#banner">Home</a>						
					</li>
					<li class="scrollToLink">
						<a href="#about">About</a>
					</li>
					<li class="scrollToLink">						
						<a href="#services">Services</a>						
					</li>
					<li class="scrollToLink">						
						<a href="#portfolio">Portfolio</a>
					</li>
					<li class="scrollToLink">		
						<a href="#skills">Skills</a>
					</li>					
					<li class="scrollToLink">														
						<a href="#testimonaials">Testimonials</a>
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

		<section class="bg-slider banner-one has-overlay text-center" id="banner">
			<div class="container">
				<div class="dt">
					<div class="dtc">
						<div class="title">Hello I’m 
							<div class="type-wrap">
			                	<div class="typed-strings">
			                    	<p>LE-ANDRIS</p>			                        
			                        <p>PROFESSIONAL</p>
			                        <p>RELIABLE</p>
			                    </div>
			                    <span class="typed"></span>
			                </div>
						</div>
						<p>Web Developer and PC Technician</p>
					</div>
				</div>
			</div>
		</section>



		<section class="about-me-area" id="about">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-me-img">
		                <img src="img/resources/about-me-signature.jpg" alt="awesome image">
		            </div>
		            <div class="col-lg-5 col-md-5 col-sm-10 col-xs-12 col-md-offset-1">
		               <div class="about-me-info">
				            <div class="sec-title">
				                <span class="tag-line">I Am Developer</span>
					            <h1>About Me</h1>
					            <span class="border"></span>
				            </div>
				            <div class="about-me-address">
				                <ul>
				                    <li><p>Name :</p> Le-Andris Daniel</li>
				              		<li><p>Email :</p> <?php echo obfuscate_email('Lee@LDanielDev.Com'); ?></li>
				              		<li><p>Phone :</p> +1 636 866 8172</li>
				              		<li><p>Profession :</p> Web Developer &amp; PC Technician</li>                    
		                            <li><p>Experience :</p> 5 Years Experience</li>
		                            <li><p>Based in :</p> Saint Charles, Missouri, USA</li>
				                </ul>
				            </div>
		               </div> 
		            </div>
		        </div>
		    </div>
		</section>



		<!-- .welcome-section -->
		<section class="client-offer-area section-padding" id="services">
			<div class="container">
				<!-- .sec-title -->
				<div class="sec-title text-center">
				    <span class="tag-line">My Awesome Services</span>
					<h1>What I offer</h1>
					<span class="border"></span>
					<!-- <p></p> -->
				</div><!-- /.sec-title -->

				<div class="row client-offer text-center">
				    <!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="fa fa-paint-brush"></i>
							</div>
		                    <h3>Designs to Code</h3>
		                    <p>Code designs created in Adobe Illustrator and Photoshop into fully fleshed out websites.</p>
					    </div>
					</div>
					<!--End single client offer-->
					<!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="icon icon-WorldWide"></i>
							</div>
		                    <h3>Website Development</h3>
		                    <p>Clean and responsive website development using HTML, PHP, jQuery, and frameworks such as WordPress.</p>
					    </div>
					</div>
					<!--End single client offer-->
					<!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="icon icon-Dollars"></i>
							</div>
		                    <h3>E-Commerce</h3>
		                    <p>Online storefronts created though frameworks like Magento, WordPress, SquareSpace, and Shopify.</p>
					    </div>
					</div>
					<!--End single client offer-->
				</div>

				<div class="row client-offer text-center">
				    <!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="icon icon-Tools"></i>
							</div>
		                    <h3>PC Builds &amp; Repair</h3>
		                    <p>PCs built from scratch for gaming, entertainment or business purposes. Also PC Repairs, clean ups, virus removal.</p>
					    </div>
					</div>
					<!--End single client offer-->
					<!--Start single client offer-->
					<!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="fa fa-server"></i>
							</div>
							                    <h3>Website Hosting</h3>
							                    <p>Simple, Fast and reliable hosting complete with Google powered apps for mail, calendar, and more.</p>
					    </div>
					</div> -->
					<!--End single client offer-->
					<!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="icon icon-Plaster"></i>
							</div>
		                    <h3>Website Support</h3>
		                    <p>Whether it be changing text, adding features, or updating your WordPress, I can keep your site up to date, and online. </p>
					    </div>
					</div>
					<!--End single client offer-->					
				    <!--Start single client offer-->
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    <div class="single-client-offer">
					        <div class="icon-holder">
								<i class="icon icon-Notes"></i>
							</div>
		                    <h3>C.M.S. Training</h3>
		                    <p>I offer training on how to use systems such as WordPress, and other C.M.S enabled website.</p>
					    </div>
					</div>
					<!--End single client offer-->	
				</div>

			</div>
		</section><!-- /.welcome-section -->



		<!-- .portfolio-section -->
		<section class="portfolio-section home-v4-portfolio" id="portfolio">
			<div class="container-fluid home-v4-portfolio-header">
				<!-- .sec-title -->
				<div class="sec-title text-center">
					<h1>my awesome portfolio</h1>
					<span class="tag-line">Quality &amp; Professional Code</span>
					<span class="border"></span>
				</div><!-- /.sec-title -->
				<!-- .portfolio-content-wrap -->
				<div class="portfolio-content-wrap ">
					<!-- .portfolio-filter -->
					<ul class="portfolio-filter text-center">
						<li data-filter="all" class="portfolio-sorter active">
							<span>All</span>
						</li>
						<li data-filter=".static-website" class="portfolio-sorter">
							<span>Static Websites</span>
						</li>
						<li data-filter=".php-website" class="portfolio-sorter">
							<span>PHP Websites</span>
						</li>
						<li data-filter=".e-commerce" class="portfolio-sorter">
							<span>E-Commerce</span>
						</li>
						<li data-filter=".cms" class="portfolio-sorter">
							<span>Content Management Systems</span>
						</li>
						<li data-filter=".pc-build" class="portfolio-sorter">
							<span>PC Builds</span>
						</li>
					</ul><!-- /.portfolio-filter -->
		        </div>
		    </div>

		    <div class="container-fluid">		        

		        <!-- .portfolio-content -->
		        <div class="portfolio-content image-gallery" data-filter-class="portfolio-sorter">
		         <!-- .single-portfolio -->
		            <div class="single-portfolio cms span-3 mix">
		                <img src="img/portfolio/g-bravo-music/sm.jpg" alt="G. Bravo Music">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/g-bravo-music/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#g-bravo-music">
			                            <h4>G. Bravo Music</h4>
			                            <p>A SquareSpace website I designed and created for the up-and-coming hip-hop/rap artist G. Bravo in the Saint Louis, Missouri area.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- /.single-portfolio -->


		            <!-- .single-portfolio -->
		            <div class="single-portfolio cms e-commerce span-3 mix">
		                <img src="img/portfolio/g-bravo-store/sm.jpg" alt="G. Bravo Merchandise Store">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/g-bravo-store/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#g-bravo-store">
			                            <h4>G. Bravo Merchandise Store</h4>
			                            <p>An e-commerce website I created for the up-and-coming hip-hop/rap artist G. Bravo in the Saint Louis, Missouri area.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- /.single-portfolio -->	


		            <!-- .single-portfolio -->
		            <div class="single-portfolio pc-build span-3 mix">
		                <img src="img/portfolio/whisper-quiet-gaming-productvity-pc/sm.jpg" alt="Wisper Quiet Gaming &amp; Productivity PC Build">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/whisper-quiet-gaming-productvity-pc/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#whisper-quiet-gaming-productvity-pc">
			                            <h4>Whisper Quiet Gaming &amp; Productivity PC</h4>
			                            <p></p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->	


		            <!-- .single-portfolio -->
		            <div class="single-portfolio php-website cms span-3 mix">
		                <img src="img/portfolio/le-andris-daniel-portfolio-v1/sm.jpg" alt="Le-Andris Daniel Portfolio">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/le-andris-daniel-portfolio-v1/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#le-andris-daniel-portfolio-v1">
			                            <h4>Personal Portfolio Version 1</h4>
			                            <p>My awesome personal portfolio to showcase all of my work, skills and abilities.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website span-3 mix">
		                <img src="img/portfolio/rc-compucare/sm.jpg" alt="RC Compucare">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/rc-compucare/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#rc-compucare">
			                            <h4>RC Compucare</h4>
			                            <p>A website I created for a computer repair company in Saint Kitts.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website cms span-3 mix">
		                <img src="img/portfolio/canoe-the-ozarks/sm.jpg" alt="canoe the ozarks website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/canoe-the-ozarks/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#canoe-the-ozarks">
			                            <h4>Canoe The Ozarks</h4>
			                            <p>A blog about the wonderful rivers and forests on the Ozarks.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio static-website span-3 mix">
		                <img src="img/portfolio/gateway-medical-disposal/sm.jpg" alt="gateway medical disposal">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/gateway-medical-disposal/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#gateway-medical-disposal">
			                            <h4>Gateway Medical Disposal</h4>
			                            <p>A website I coded for a medical waste disposal company in St. Louis.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio pc-build span-3 mix">
		                <img src="img/portfolio/gaming-home-theatre-pc/sm.png" alt="gaming home theatre pc build">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/gaming-home-theatre-pc/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#gaming-home-theatre-pc">
			                            <h4>Quiet Gaming Home Theatre PC</h4>
			                            <p></p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio static-website span-3 mix">
		                <img src="img/portfolio/jh-exteriors/sm.jpg" alt="jh exteriors website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/jh-exteriors/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#jh-exteriors">
			                            <h4>jh exteriors</h4>
			                            <p>A website I coded for a reputable, family-owned exterior remodeling and construction company in St. Louis.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website cms span-3 mix">
		                <img src="img/portfolio/law-donovan/sm.jpg" alt="JOANN C DONOVAN LLC website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/law-donovan/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#law-donovan">
			                            <h4>JOANN C DONOVAN LLC</h4>
			                            <p>A WordPress website I coded for a Missouri divorce, family law and personal injury lawyer.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio static-website span-3 mix">
		                <img src="img/portfolio/ps-rapp/sm.jpg" alt="PS RAPP SEWER AND PLUMBING website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/ps-rapp/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#ps-rapp">
			                            <h4>PS RAPP SEWER AND PLUMBING</h4>
			                            <p>A website I coded for a certified home and commercial plumbing company in Missouri.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website cms span-3 mix">
		                <img src="img/portfolio/rx-systems-blog/sm.jpg" alt="rx systems blog website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/rx-systems-blog/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#rx-systems-blog">
			                            <h4>RX SYSTEMS BLOG</h4>
			                            <p>A WordPress blog I coded for a St. Louis skin care company.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio static-website span-3 mix">
		                <img src="img/portfolio/training-effect/sm.jpg" alt="training effect llc website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/training-effect/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#training-effect">
			                            <h4>training effect llc</h4>
			                            <p>A website I coded for a personal training and fitness studio in O'Fallon Missouri.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website span-3 mix">
		                <img src="img/portfolio/trileaf-designs/sm.jpg" alt="trileaf designs website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/trileaf-designs/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#trileaf-designs">
			                            <h4>trileaf designs</h4>
			                            <p>A website I coded for a marketing, web programming, and graphic design company in St. Louis where I currently work as the lead web developer.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website e-commerce cms span-3 mix">
		                <img src="img/portfolio/trileaf-tsfl-store/sm.jpg" alt="TRILEAF DESIGNS - TAKE SHAPE FOR LIFE STORE website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/trileaf-tsfl-store/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#trileaf-tsfl-store">
			                            <h4>TRILEAF DESIGNS - TAKE SHAPE FOR LIFE STORE</h4>
			                            <p>An e-commerce website I coded for Trileaf Designs LLC in St. Louis for ordering customized Take Shape for Life marketing materials for coaches.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio php-website cms span-3 mix">
		                <img src="img/portfolio/zane-williams-blog/sm.jpg" alt="ZANE WILLIAMS BLOG website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/zane-williams-blog/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#zane-williams-blog">
			                            <h4>ZANE WILLIAMS BLOG</h4>
			                            <p>A WordPress blog I coded for a certified custom sign and banner company in St. Louis.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		             <!-- .single-portfolio -->
		            <div class="single-portfolio static-website span-3 mix">
		                <img src="img/portfolio/zane-williams-e-newsletter-template/sm.jpg" alt="ZANE WILLIAMS BLOG website">
		                <!-- .overlay -->
		                <div class="overlay">
		                    <div class="image-view">
		                        <div class="box">
		                        	<a class="fancybox" href="img/portfolio/zane-williams-e-newsletter-template/lg.jpg"><i class="fa fa-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="item-title">
		                    	<div class="box">
			                        <a class="fancybox" href="#zane-williams-e-newsletter-template">
			                            <h4>ZANE WILLIAMS E-NEWSLETTER TEMPLATE</h4>
			                            <p>An e-newsletter template I coded for a certified custom sign and banner company in St. Louis.</p>
			                        </a>
		                        </div>
		                    </div>
		                </div><!-- /.overlay -->
		            </div><!-- .single-portfolio -->


		        </div><!-- /.portfolio-content -->
			</div>
		</section><!-- /.portfolio-section -->

		<!-- .our-skills -->
		<section class="our-skills home-v4-skill-area" id="skills">
			<div class="container">
				<div class="row">
				    <div class="col-lg-12">
				        <div class="sec-title text-center">
					        <h1>My skills</h1>
					        <span class="tag-line">I am expert</span>
					        <span class="border"></span>
				        </div>
				    </div>
		        </div>
		        <div class="row">
					<div class="col-md-6 skill-left-part">
						<div class="skill-left-img">
						   <img src="img/our-skills/skill-left-img.jpg" alt="awesome image"> 
						</div>
						<div class="skills-left-text">
							<h4>I love to code</h4>
							<p>
								I have a high level of experience with programming and development, and I have worked on projects of all sizes. I specialize in website development using clean, standards compliant, cross-browser compatible PHP, HTML, CSS and JavaScript with focus on usability &amp; accessibility.
							 </p>
						</div>
					</div>
					<div class="col-md-6 home-v4-skill-name">
						<!-- .skills-name -->
						<ul class="skills-name">
							<li data-value="99">
								<h5>HTML</h5>
								<div class="progress-wrap">
									<span class="progress-value-bar">
										<span class="value">99</span>
									</span>							
								</div>
							</li>
							<li data-value="95">
								<h5>CSS</h5>
								<div class="progress-wrap">
									<span class="progress-value-bar">
										<span class="value">95</span>
									</span>							
								</div>
							</li>
							<li  data-value="85">
								<h5>JavaScript</h5>
								<div class="progress-wrap">
									<span class="progress-value-bar">
										<span class="value">85</span>
									</span>
									
								</div>
							</li>
							<li data-value="90">
								<h5>PHP</h5>
								<div class="progress-wrap">
									<span class="progress-value-bar">
										<span class="value">90</span>
									</span>							
								</div>
							</li>
							<li data-value="85">
								<h5>WordPress</h5>
								<div class="progress-wrap">
									<span class="progress-value-bar">
										<span class="value">85</span>
									</span>							
								</div>
							</li>
						</ul><!-- /.skills-name -->
					</div>
				</div>
			</div>
		</section><!-- /.our-skills -->

		<!-- .testimonials -->
		<section class="testimonials section-padding testimonials-home-v4" id="testimonaials">
			<div class="container">
				<!-- .sec-title -->
				<div class="sec-title text-center">
					<h1>What everybody's saying</h1>
					<span class="tag-line">don't just take my word for it</span>
					<span class="border"></span>
				</div><!-- /.sec-title -->
				<div class="testimonials-wrap row">
					<div class="owl-carousel owl-theme">
						<div class="item">
							<!-- .single-testimonials -->
							<div class="single-testimonials home-v4-single-textimonial">
								<!-- .text-box -->
								<div class="text-box">
									<p>
										<span class="qoute">“</span>
										Definitely worth the investment. If you’re in need of a website, Lee’s definitely the guy to talk to. He made the whole process painless and explained everything in simple easy to understand terms, and was able to find me a solution to meet all my needs within my budget.
									</p>
								</div><!-- /.text-box -->
								<!-- .client-box -->
								<div class="client-box">
									<!-- .img-box -->
									<div class="img-box">
										<img src="img/testimonials/male-avatar.jpg" alt="Ryan Caesar RC Compucare testimonaial">
									</div><!-- /.img-box -->
									<!-- .info-box -->
									<div class="info-box">
										<h4>Ryan Caesar</h4>
										<span>CEO- Founder</span>
									</div><!-- /.info-box -->
								</div><!-- /.client-box -->
							</div><!-- /.single-testimonials -->
						</div>
						<div class="item">
							<!-- .single-testimonials -->
							<div class="single-testimonials home-v4-single-textimonial">
								<!-- .text-box -->
								<div class="text-box">
									<p>
										<span class="qoute">“</span>
										Lee was able to take my old, slow laptop and breathe new life into it. It's now running as fast as the day i got it from the store. Thanks man!!!!
									</p>
								</div><!-- /.text-box -->
								<!-- .client-box -->
								<div class="client-box">
									<!-- .img-box -->
									<div class="img-box">
										<img src="img/testimonials/male-avatar.jpg" alt="student Zachary Harris testimonaial">
									</div><!-- /.img-box -->
									<!-- .info-box -->
									<div class="info-box">
										<h4>Zachary Harris</h4>
										<span>Student</span>
									</div><!-- /.info-box -->
								</div><!-- /.client-box -->
							</div><!-- /.single-testimonials -->
						</div>
						<div class="item">
							<!-- .single-testimonials -->
							<div class="single-testimonials home-v4-single-textimonial">
								<!-- .text-box --> 
								<div class="text-box">
									<p>
										<span class="qoute">“</span>
										Lee has always been my go to guy for all my computer and technology needs. Whenever my computer start acting up or moving slow he’s the first person I call, and he always gets the job done right.
									</p>
								</div><!-- /.text-box -->
								<!-- .client-box -->
								<div class="client-box">
									<!-- .img-box -->
									<div class="img-box">
										<img src="img/testimonials/male-avatar.jpg" alt="Supply Chain Manager Lewis Hodge testimonaial">
									</div><!-- /.img-box -->
									<!-- .info-box -->
									<div class="info-box">
										<h4>Lewis Hodge</h4>
										<span>Supply Chain Manager</span>
									</div><!-- /.info-box -->
								</div><!-- /.client-box -->
							</div><!-- /.single-testimonials -->
						</div>						
					</div>
				</div>
			</div>
		</section><!-- /.testimonials -->

		<!-- .our-clients -->
		<section class="our-clients section-padding">
			<div class="container">
				<!-- .sec-title -->
				<div class="sec-title text-center">
					<h1>I've Coded For</h1>
					<span class="tag-line">Est. since 2010</span>
					<span class="border"></span>
				</div><!-- /.sec-title -->
				<div class="client-carousel">
					<div class="owl-carousel owl-theme">
						<div class="item">
							<a target="_blank" href="http://www.gbravomusic.com"><img src="img/client-carousel/g-bravo.png" alt="G Bravo logo"></a>
						</div>
						<div class="item">
							<img src="img/client-carousel/f1visa-entertainment.png" alt="f1visa entertainment logo">
						</div>
						<div class="item">
							<a target="_blank" href="http://www.lawrencefabric.com"><img src="img/client-carousel/lawrence-fabric.png" alt="Lawrence Fabric &amp; Metal Structures logo"></a>
						</div>
						<div class="item">
							<a target="_blank" href="http://www.rxsystemspf.com"><img src="img/client-carousel/rx-systems-pf.png" alt="RX Systems PF logo"></a>
						</div>
						<div class="item">
							<a target="_blank" href="http://www.gatewaymedicaldisposal.com"><img src="img/client-carousel/gateway-medical-disposal.png" alt="gateway medical disposal logo"></a>
						</div>
						<div class="item">
							<img src="img/client-carousel/rc-compucare.png" alt="RC Compucare logo">
						</div>
						<div class="item">
							<a target="_blank" href="http://www.trileafdesigns.com"><img src="img/client-carousel/trileaf-designs.png" alt="trileaf designs logo"></a>
						</div>					
						<div class="item">
							<a target="_blank" href="http://www.canoetheozarks.com"><img src="img/client-carousel/canoe-the-ozarks.png" alt="canoe the ozarks logo"></a>
						</div>					
						<div class="item">
							<a target="_blank" href="http://www.lawdonovan.com"><img src="img/client-carousel/law-donovan.png" alt="JoAnn C. Donovan Attorney at Law logo"></a>
						</div>					
						<div class="item">
							<a target="_blank" href="http://www.jhexteriors.com"><img src="img/client-carousel/jh-exteriors.png" alt="JH Exteriors Roofing Contractor logo"></a>
						</div>					
						<div class="item">
							<a target="_blank" href="http://www.psrapp.com"><img src="img/client-carousel/ps-rapp.png" alt="P.S. Rapp Sewer and Plumbing logo"></a>
						</div>				
						<div class="item">
							<img src="img/client-carousel/training-effect.png" alt="training effects fitness training logo">
						</div>				
						<div class="item">
							<a target="_blank" href="http://www.zanewilliams.com"><img src="img/client-carousel/zane-williams.png" alt="zane williams printing logo"></a>
						</div>
					</div>
				</div>
			</div>
		</section><!-- .our-clients -->

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


<section id="whisper-quiet-gaming-productvity-pc" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/whisper-quiet-gaming-productvity-pc/lg.jpg" alt="Wisper Quiet Gaming &amp; Productivity PC">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Whisper Quiet Gaming &amp; Productivity PC</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
                   <p>Took on the challenge of building a powerhouse of a PC that stays whisper quiet even under the most demanding of workloads or games. This PC is so quiet I even forgot it was on a few times during testing. At idle the CPU stays at a cool 30&deg;C with the cooler going at just 650RPM.</p>
                   <ul>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">OS:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Windows 10 Pro 64bit</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">CPU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Intel i7 4790K</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">PSU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Corsair RM1000i</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">GPU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">EVGA GeForce GTX 970 4GB SC</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Case:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Fractal Design R5</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Memory:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">32 GB Corsair Vengeance</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">CPU Cooler:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">BeQuiet! Dark Rock 3</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Motherboard:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">ASROCK Z97 Extreme 4</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Primary HDD:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">256GB Plextor M5 Pro</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Secondary HDD:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">1TB 7200RPM Seagate Desktop Drive</span>
                   		</li>
                   </ul>		                                 
                </div>
            </div>
        </div>
    </div>
</section>

<section id="rc-compucare" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/rc-compucare/lg.jpg" alt="RC Compucare website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About RC Compucare</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
                   <p>A website I designed and coded for a computer repair company in Saint Kitts.</p>
                   <ul>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML &amp; CSS</span>
                       	</li>
						<li class="row">
							<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
							<span class="col-lg-10 col-md-11 col-sm-11">jQuery Slider</span>
						</li>
						<li class="row">
							<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
							<span class="col-lg-10 col-md-11 col-sm-11">Ajax Chat Client</span>
						</li>
						<li class="row">
							<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
							<span class="col-lg-10 col-md-11 col-sm-11">Facebook Integration</span>
						</li>
						<li class="row">
							<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
							<span class="col-lg-10 col-md-11 col-sm-11">PHP RSS Feed Readers</span>
						</li>
						<li class="row">
							<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
							<span class="col-lg-10 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
						</li>
                   </ul>		                   

					<div class="client-testimonial">
						<div class="sec-title">
				            <span class="tag-line">Client Testimonial</span>
				            <span class="border"></span>
			            </div>
		               	<p><span class="quote">“</span>Definitely worth the investment. If you’re in need of a website, Lee’s definitely the guy to talk to. He made the whole process painless and explained everything in simple easy to understand terms, and was able to find me a solution to meet all my needs within my budget.</p>
	               	</div>	              
                </div>
            </div>
        </div>
    </div>
</section>

<section id="le-andris-daniel-portfolio-v1" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/le-andris-daniel-portfolio-v1/lg.jpg" alt="Personal Portfolio of Le-Andris Daniel">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About My Personal Profile Version 1</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
                   <p>A portfolio that I designed and coded for myself, separate from my freelancing site, to showcase all of the web development work that I have completed. </p>
                   <p>This portfolio shows off the progression in my coding skills from the time I began developing websites up and now. I'm always learning new tools and ways to develop, and learning from past project ways to do thing better, more efficiently and refactoring my code to make it more concise.</p>
                   <ul>
               			<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML &amp; CSS</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">jQuery</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Twitter integration</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">WordPress blog integration</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Search Engine Optimization (SEO)</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Ajax portfolio project pagination</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Ajax portfolio project category switching</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">PHP Objects for projects, and database queries</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in all modern browsers</span>
                       	</li>
                   		<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible on mobile devices</span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="g-bravo-music" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/g-bravo-music/lg.jpg" alt="G Bravo music website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About G Bravo Music</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A SquareSpace website I designed and created for the up-and-coming hip-hop/rap artist G. Bravo in the Saint Louis, Missouri area.</p>
					<p>The client needed a solution built-in to collect metrics on his web traffic and traffic sources, and also integrate is newsletter and song download sign-ups into the website.</p>
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML &amp; CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Integration of third-party plugin for newsletter signups</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Integration of third-party plugin for music downloads</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in all modern browsers</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible on mobile devices</span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="canoe-the-ozarks" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/canoe-the-ozarks/lg.jpg" alt="Canoe The Ozarks website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Canoe The Ozarks</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A blog about the wonderful rivers and forests on the Ozarks that I updated and refreshed with a new header, navigation style, and sidebar.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML &amp; CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Setup blog page navigation</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Re-coded website header to provided design</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in all modern browsers</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Fixed sidebar display problems</span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="gateway-medical-disposal" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/gateway-medical-disposal/lg.jpg" alt="Gateway Medical Disposal website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Gateway Medical Disposal</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A website I coded for a medical waste disposal company in St. Louis.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS/jQuery</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="gaming-home-theatre-pc" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/gaming-home-theatre-pc/lg.jpg" alt="gaming home theatre pc">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Quiet Gaming Home Theatre PC</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
                   <p>Took on the challenge of building a HTPC that stays quiet while watching movies and under the load of todays most demanding games.</p>
                   <ul>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">OS:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Windows 10 Pro 64bit</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">CPU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Intel i5 3570K</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">PSU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Corsair CXM 750W</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">GPU:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Asus GeForce GTX 970 STRIX</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Case:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Silverstone GD09</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Memory:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">16 GB DDR3 G.Skill Sniper</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">CPU Cooler:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Scythe BIG Shuriken 2 Rev. B</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Motherboard:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">ASRock Z77M Micro ATX LGA1155</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Primary HDD:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">64GB Crucial M4 SSD</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Secondary HDD:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">1TB 7200RPM Seagate Barracuda HDD</span>
                   		</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<pre class="col-lg-4 col-md-4 col-sm-4">Optical Drive:</pre>
                       		<span class="col-lg-7 col-md-7 col-sm-7">Panasonic UJ-265 Slim Blu-Ray Drive</span>
                   		</li>
                   </ul>		                                 
                </div>
            </div>
        </div>
    </div>
</section>

<section id="g-bravo-store" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/g-bravo-store/lg.jpg" alt="G. Bravo Merchandise Store website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About G. Bravo Merchandise Store</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>An e-commerce website I created for the up-and-coming hip-hop/rap artist G. Bravo in the Saint Louis, Missouri area.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Design coded to match the design of the G. Bravo Music website</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in all modern browsers</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible on mobile devices</span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="jh-exteriors" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/jh-exteriors/lg.jpg" alt="jh exteriors website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About JH Exteriors</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A website I coded for a reputable, family-owned exterior remodeling and construction company in St. Louis.
					</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">jQuery homepage slider</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">jQuery animated drop-down menu</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="law-donovan" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/law-donovan/lg.jpg" alt="JoAnn C Donovan LLC website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About JoAnn C Donovan LLC</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A WordPress website I coded for a Missouri divorce, family law and personal injury lawyer.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE8+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="ps-rapp" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/ps-rapp/lg.jpg" alt="PS Rapp Sewer and Plumbing website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About PS Rapp Sewer and Plumbing</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A website I coded for a certified home and commercial plumbing company in Missouri.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="rx-systems-blog" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/rx-systems-blog/lg.jpg" alt="Rx Systems Blog website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Rx Systems Blog</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A WordPress blog I coded for a St. Louis skin care company.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="training-effect" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/training-effect/lg.jpg" alt="training-effect llc website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Training Effect LLC</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A website I coded for a personal training and fitness studio in O'Fallon Missouri.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="trileaf-designs" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/trileaf-designs/lg.jpg" alt="trileaf designs website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About TriLeaf Designs</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A website I coded for a marketing, web programming, and graphic design company in St. Louis where I currently work as the lead web developer.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Object Oriented PHP</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">jQuery homepage slider</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">jQuery RSS feed pulls</span>
                       	</li>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Custom coded jQuery/PHP Social Media Bar</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="trileaf-tsfl-store" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/trileaf-tsfl-store/lg.jpg" alt="TriLeaf Designs - Take Shape for Life Store website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About TriLeaf Designs - Take Shape for Life Store</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>An e-commerce website I coded for Trileaf Designs LLC in St. Louis for ordering customized Take Shape for Life marketing materials for coaches.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE7+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="zane-williams-blog" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/zane-williams-blog/lg.jpg" alt="Zane Williams Blog website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Zane Williams Blog</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>A WordPress blog I coded for a certified custom sign and banner company in St. Louis.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in IE8+, Firefox, Safari, Chrome, and Opera</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>

<section id="zane-williams-e-newsletter-template" class="about-the-products-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-6 about-products-left">
                <div class="about-products-left-img">
                    <img src="img/portfolio/zane-williams-e-newsletter-template/lg.jpg" alt="PS Rapp Sewer and Plumbing website">
                </div>
            </div>
            <div class="col-lg-5 col-md-4 col-sm-6">
                <div class="about-the-products-right">
                    <div class="sec-title">
			            <h1>About Zane Williams E-Newsletter Template</h1>
			            <span class="tag-line">details of the Project</span>
			            <span class="border"></span>
		            </div>
					<p>An e-newsletter template I coded for a certified custom sign and banner company in St. Louis.</p>
					
                   	<ul>
						<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">HTML/CSS</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Compatible in Hotmail, Gmail, Mozilla Thunderbird, Apple Mail, and Yahoo Mail clients</span>
                       	</li>
                       	<li class="row">
                       		<i class="fa fa-long-arrow-right col-lg-1 col-md-1 col-sm-1"></i>
                       		<span class="col-lg-11 col-md-11 col-sm-11">Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a></span>
                       	</li>
                   </ul>                   
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>