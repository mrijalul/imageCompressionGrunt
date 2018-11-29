module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		image: {
			dynamic: {
				options: {
					pngquant: true,
					optipng: true,
					zopflipng: true,
					jpegRecompress: '--min',
					jpegoptim: true,
					mozjpeg: true,
					gifsicle: true,
					guetzli: true,
					svgo: true,
					reporterOutput: null,
					colorizeOutput: true
				},
				files: [{
					optimizationLevel: 7,
					progressive: true,
					interlaced: true,
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,PNG,jpg,JPG,jpeg,gif}'],
					dest: 'img-compress-image/',
					rename: function(dest, src){
						var get_last_char 		= src.slice(-4);
						var remove_last_char 	= src.slice(0,-4);
						return dest + remove_last_char + '.min.' + get_last_char;
					}
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-image');
	grunt.registerTask('default', ['image']);
};