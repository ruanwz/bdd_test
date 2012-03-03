# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# This is an example with all options that you can specify for guard-process
guard 'process', :name => 'name of your process', :command => 'node spec/runtests.js', :env => {"ENV1" => "value 1", "ENV2" => "value 2"}, :stop_signal => "KILL"  do
  watch(%r{^*\.js$})
  watch(%r{^spec/*/*\.js$})
end

