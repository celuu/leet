times = [
  { start: 9, end: 11 },
  { start: 11, end: 12 },
  { start: 10, end: 13 }
]

def check_for_overlap(times)
  sorted = times.sort_by { |t| t[:start] }
  (0...sorted.length - 1).each do |i|
    current = sorted[i]
    next_one = sorted[i + 1]
    if next_one[:start] <= current[:end] 
       return true
    end

  end

  false

end

pp check_for_overlap(times)