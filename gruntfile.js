module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		image: {
			dynamic: {
				options: {
					pngquant: true,
					optipng: false,
					zopflipng: true,
					jpegRecompress: false,
					jpegoptim: true,
					mozjpeg: true,
					gifsicle: true,
					svgo: true
				},
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,jpeg,gif}'],
					dest: 'img-compress/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-image');
};