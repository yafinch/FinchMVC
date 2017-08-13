$('.ui.left.sidebar').first()
    .sidebar('setting', 'transition', 'uncover')
    .sidebar('attach events', '.left-sidebar-toggle')
    ;
$('.ui.top.sidebar').first()
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('attach events', '.top-sidebar-toggle')
    ;
$('.ui.right.sidebar').first()
    .sidebar('setting', 'transition', 'uncover')
    .sidebar('attach events', '.right-sidebar-toggle')
    ;

$('.ui.dropdown').dropdown();

$('.ui.sticky').sticky();