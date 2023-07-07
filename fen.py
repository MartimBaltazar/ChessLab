import os
import zstandard as zstd

file_path = "puzzles/lichess_db_puzzle.csv.zst"  # Replace with the actual file path
output_directory = "puzzlesByRating"

# Create the output directory if it doesn't exist
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

output_files = {
    "0_500": os.path.join(output_directory, "output_0_500.txt"),
    "500_1000": os.path.join(output_directory, "output_500_1000.txt"),
    "1000_1500": os.path.join(output_directory, "output_1000_1500.txt"),
    "1500_2000": os.path.join(output_directory, "output_1500_2000.txt"),
    "2000_2500": os.path.join(output_directory, "output_2000_2500.txt"),
    "2500_3000": os.path.join(output_directory, "output_2500_3000.txt")
}

rating_ranges = {
    "0_500": range(0, 501),
    "500_1000": range(501, 1001),
    "1000_1500": range(1001, 1501),
    "1500_2000": range(1501, 2001),
    "2000_2500": range(2001, 2501),
    "2500_3000": range(2501, 3001)
}

num_puzzles = 2000

# Open the zst file in binary mode
with open(file_path, "rb") as file:
    dctx = zstd.ZstdDecompressor()
    with dctx.stream_reader(file) as reader:
        # Read the uncompressed data from the zst file
        uncompressed_data = reader.read()

# Decode the uncompressed data from bytes to string
decoded_data = uncompressed_data.decode("utf-8")

# Split the decoded data into lines
lines = decoded_data.split("\n")

# Create a dictionary to store the file objects
file_objects = {}

# Open the file objects for writing
for rating_range in output_files:
    file_objects[rating_range] = open(output_files[rating_range], "w")

# Write the extracted fields to the corresponding output files based on rating ranges
puzzle_count = 0
for line in lines:
    fields = line.split(",")
    fen = fields[1]
    moves = fields[2]
    rating = fields[3]
    if rating != "Rating":
        rating = int(rating)

    # Determine the rating range and write the puzzle to the corresponding output file
    for rating_range, rating_values in rating_ranges.items():
        if rating in rating_values:
            output_file = file_objects[rating_range]
            output_file.write(f"FEN: {fen}\n")
            output_file.write(f"Moves: {moves}\n")
            output_file.write(f"Rating: {rating}\n")
            output_file.write("-" * 20 + "\n")
            break

    puzzle_count += 1
    if puzzle_count >= num_puzzles:
        break

# Close the file objects
for file_obj in file_objects.values():
    file_obj.close()
