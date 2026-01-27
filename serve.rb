availability = [
{ name: "Alex", start: 8, end: 12 },
{ name: "Jordan", start: 10, end: 14 },
{ name: "Sam", start: 7, end: 9 }
]


event = { start: 9, end: 11 }

def serve(availability, event)
  users = availability.map do |avail|
    event_start = event[:start]
    event_end = event[:end]
    availability.filter_map do |avail|
      avai
    end

  end
end

pp serve(availability, event)