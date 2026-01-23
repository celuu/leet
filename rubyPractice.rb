object =  [
  { person_id: 1, group_id: 10, attended: true },
  { person_id: 2, group_id: 10, attended: false },
  { person_id: 3, group_id: 10, attended: true },
  { person_id: 4, group_id: 20, attended: false },
  { person_id: 5, group_id: 20, attended: false }
]


def count_attendance(object)
 
  grouped = object.group_by { |obj| obj[:group_id]}
  grouped.map do |group_id, people|
     did_attend = people.count { |obj| obj[:attended] }
    {
      group_id: group_id,
      count: people.size,
      attended: did_attend,
      attendance_rate: (did_attend.to_f/people.size)
    }
  end
end


pp count_attendance(object)