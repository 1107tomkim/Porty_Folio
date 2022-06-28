# printing simple strings with the usage of print statement.
print("Hello my name is Tommy and this is my simple sentence!")


# printing the same sentence above
# use a string variable my_name = Tommy
# Concatenate (Meaning combine the multiple strings together to form one)
my_name = "Tommy"
print("Hello my name is " + my_name + " and this is my simple sentence!")


# print a simple string with your age
# set your age as a variable and concatenate
my_age = 25
print("Hello my name is " + my_name + " I am " + my_age + " years old!")

# --> Keep noted that the above statement would throw an error because when concatenating a string, you can not have a mixture of string and integer.
# --> To fix this issue, you use a python function called str(int_variable) to change your int variable to a string variable

print("Hello my name is " + my_name + " I am " + str(my_age) + " years old!")
