strings = [
  { name: "  jessica  smith ", email: "JESS@EMAIL.COM" },
  { name: "Jessica Smith", email: "jess@email.com" }
]

def normalize_strings(strings)
  seen = {}
  strings.delete_if do |row|
    row[:name] = row[:name].to_s.strip.split.map(&:capitalize).join(" ")
    row[:email] = row[:email].to_s.strip.downcase

    if seen[:email]
      true
    else
      seen[:email] = true
      false
    end
    
  end
  strings
end

pp normalize_strings(strings)