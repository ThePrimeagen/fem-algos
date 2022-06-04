#include <stdio.h>
#include <vector>

int print(std::vector<int> &a, const char* name) {
    printf("%s: ", name);
    for (const auto& it : a) {
        printf("%d", it);
    }
    printf("\n");
}

int main() {
    std::vector<int> a;
    std::vector<int>* b = &a;
    b->push_back(5);

    print(a, "a");
    print(*b, "b");
}
