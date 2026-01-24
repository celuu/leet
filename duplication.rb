check_ins = [
{ event_id: 1, person_id: 10 },
{ event_id: 1, person_id: 11 },
{ event_id: 2, person_id: 12 },
{ event_id: 1, person_id: 10 }
]

def total_check_ins(check_ins)
  grouped_events = check_ins.group_by{|check_in| check_in[:event_id]}
 

  unique = grouped_events.map do |event_id, ins|
     user_ids = []
    ins.each do |check_in|
      user_ids << check_in[:person_id]
    end
    {
      event_id: event_id,
      count: user_ids.uniq.count
    }
  

  end
  

end

pp total_check_ins(check_ins)