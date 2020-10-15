RewriteEngine On

RewriteCond %{REQUEST_METHOD} ^GET$
RewriteRule ^jokes$ controllers/jokes_controller.php?action=index

RewriteCond %{REQUEST_METHOD} ^POST$
RewriteRule ^jokes$ controllers/jokes_controller.php?action=create

RewriteCond %{REQUEST_METHOD} ^PUT$
RewriteRule ^jokes/([0-9]+)$ controllers/jokes_controller.php?action=update&id=$1

RewriteCond %{REQUEST_METHOD} ^DELETE$
RewriteRule ^jokes/([0-9]+)$ controllers/jokes_controller.php?action=delete&id=$1
