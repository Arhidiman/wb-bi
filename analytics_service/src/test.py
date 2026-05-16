# def hui_gen():
#     yield 1
#     yield 2
#     yield 4
    
# gen = hui_gen()
    
# print(next(gen))
# print(next(gen))
# print(next(gen))


def x3Gen(x):
    for n in range(10):
        yield(n*3)
        
        
gen3 = x3Gen(10)
for n in gen3:
    print(next(gen3))
    
    
# for n in x3Gen(10):
#     print(n)