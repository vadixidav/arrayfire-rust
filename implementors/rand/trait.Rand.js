(function() {var implementors = {};
implementors["arrayfire"] = [];
implementors["num"] = [];
implementors["rand"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()