<?php
/**
 * Plugin Name: redandblue Cookies
 * Plugin URI: https://github.com/redandbluefi/redandblue-cookies
 * Description: Mmm... Cookies for everyone. redandblue cookies plugin provides cookie notice and load scripts after customer confirmation.
 * Version: 0.0.2
 * Author: Red & Blue Oy, Petri Länsimaa
 * Author URI: https://redandblue.fi
 *
 * Text Domain: rnb_cookies
*/
  if (!defined('ABSPATH')) {
    exit();
  }
  
  define( 'RNB_COOKIES_PLUGIN_FILE', __FILE__ );
	define( 'RNB_COOKIES_ABSPATH', dirname( __FILE__ ) );
	define( 'RNB_COOKIES_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
	define( 'RNB_COOKIES_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

	function rnb_cookies_scripts() {
		wp_enqueue_script(
			'rnb-cookies-js', 
			RNB_COOKIES_PLUGIN_URL . 'dist/js/index.js', 
			[], 
			filemtime(RNB_COOKIES_PLUGIN_PATH . 'dist/js/index.js'), 
      true);
      
    wp_localize_script( 'rnb-cookies-js', 'rnb_cookies_data',
      array( 
        'content' 	        => apply_filters('rnb_cookies_content', 'text here'),
        'button'	          => apply_filters('rnb_cookies_button', 'Ok'),
        'header_scripts'		=> json_encode(apply_filters('rnb_cookies_header_scripts', [])),
        'body_scripts'		  => apply_filters('rnb_cookies_body_scripts', '')
      )
    );
  }
  
  function rnb_cookies_styles () {
    wp_enqueue_style(
      'rnb-cookies-style', 
      RNB_COOKIES_PLUGIN_URL . 'dist/css/style.css', 
      false, 
      filemtime(RNB_COOKIES_PLUGIN_PATH . 'dist/css/style.css'));
  }

	add_action( 'wp_enqueue_scripts', 'rnb_cookies_scripts' );
	add_action( 'wp_footer', 'rnb_cookies_styles' );
