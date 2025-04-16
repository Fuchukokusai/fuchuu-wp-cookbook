#!/usr/bin
#
# test env
cd ~/web/test/wp-content/themes/devotion-pro/ && git pull;
cd ~/web/test/wp-content/plugins/wp-link-gallery/ && git pull;

# pro env
cd ~/web/fuchukokusai.com/wp-content/themes/devotion-pro/ && git pull;
cd ~/web/fuchukokusai.com/wp-content/plugins/wp-link-gallery/ && git pull;


# file upload cmd: rsync -Pcauv source/ target/
# rsync -Pcauv ~/web/fuchukokusai.com/wp-content/uploads/2025/04 ~/web/test/wp-content/uploads/2025/04

